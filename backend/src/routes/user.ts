import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, verify, sign } from "hono/jwt";
import {signupSchema,signinSchema} from "@iamksb/medium-common"




export const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();




user.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success}=signupSchema.safeParse(body)
  if(!success){
    return c.json({ message: "Invalid email or password" }, 403);
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body?.email,
        name: body?.name,
        password: body?.password,
      },
    });
    const JWT_SECRET = c.env.JWT_SECRET;
    const token = await sign( user , JWT_SECRET);

    return c.json({ user, token },
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when signing up the user" }, 500);
  }
});

user.post("/signin",async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success}=signinSchema.safeParse(body)
  if(!success){
    return c.json({ message: "Invalid email or password" }, 403);
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body?.email,
        password: body?.password,
      },
    });
    if (!user) {
      return c.json({ message: "Invalid email or password" }, 403);
    }
    const JWT_SECRET = c.env.JWT_SECRET;
    const token = await sign( user , JWT_SECRET);

    return c.json({ user, token },
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when signing up the user" }, 500);
  }
});
