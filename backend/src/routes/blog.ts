import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, verify, sign } from "hono/jwt";
import {createBlogSchema,updateBlogSchema} from "@iamksb/medium-common";


type user ={
  id:string,
  email: string,
  name:string,
  password: string
}

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    user: user;
  }
}>();



blog.use('/*',async (c,next)=>{
  const JWT_SECRET = c.env.JWT_SECRET;
  const token = c.req.header('authorization');
  if(!token){
    return c.json({ message: "No authorization token provided" }, 403);
  }
  try {
    const decoded = await verify(token, JWT_SECRET);
    c.set('user',decoded)
    return next();
  } catch (error) {
    return c.json({ message: "Invalid token" }, 403);
  }
})



blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success}=createBlogSchema.safeParse(body)
  if(!success){
    return c.json({ message: "Invalid title or content" }, 403);
  }
  const user = c.get('user');
  try {
    const blog = await prisma.post.create({
      data: {
        title: body?.title,
        content: body?.content,
        published: body?.published,
        authorId: user?.id,
      },
    });

    
    return c.json(blog,
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when making a new blog" }, 500);
  }
});

blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success}=updateBlogSchema.safeParse(body)
  if(!success){
    return c.json({ message: "Invalid title or content" }, 403);
  }
  try {
    const blog = await prisma.post.update({
      where: { id: body?.id },
      data: {
        title: body?.title,
        content: body?.content,
        published: body?.published
      },
    });
    
    return c.json(blog,
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when updating a blog" }, 500);
  }
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findMany({
      where:{
        published: true
      },
    });
    
    return c.json( blog,
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when getting a bulk blog" }, 500);
  }
});

blog.get("/:id", async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findFirst({
      where:{
        id
      },
    });
    
    return c.json( blog,
      200);
  } catch (error) {
    console.log(error);
    
    return c.json({ message: "Error when getting a blog" }, 500);
  }
}); 

