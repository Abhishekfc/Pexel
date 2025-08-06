import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()), //profile picture

        plan: v.union(v.literal("free"), v.literal("pro")),

        //usage tracking for plan limits
        projectUsed: v.number(), //current project count
        exportsThisMonth: v.number(), //monthly exports limit tracking

        createdAt: v.number(), //timestamp of creation
        lastActiveAt: v.number(),
    })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    .searchIndex("search_name",{searchField:"name"}) //user Search
    .searchIndex("search_email",{searchField:"email"}), 

    

});