import z from 'zod';

export const signupSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
    password: z.string(),
});

export const signinSchema = z.object({
  email: z.string().email(),
    password: z.string(),
});


export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
})

export const updateBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
})




// type inference

export type iSignup= z.infer<typeof signupSchema>;
export type iSignin= z.infer<typeof signinSchema>;
export type iCreateBlog= z.infer<typeof createBlogSchema>;
export type iupdateBlogSchema= z.infer<typeof updateBlogSchema>;
