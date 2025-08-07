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

    projects: defineTable({
        // use project info
        title: v.string(),
        userId: v.id("users"),

        // Canvas dimensions and stable
        canvasState: v.any(), //Fabric.js canvas JSON(objects, layer, etc.)
        width: v.number(),
        height: v.number(),

        //Image pipeline - tracks image transformations
        originalImageUrl: v.optional(v.string()), //initial uploaded image
        currentImageUrl: v.optional(v.string()), //current processed image
        thumbnailUrl: v.optional(v.string()), //small preview for dashboard

        activeTransformations: v.optional(v.string()), //current ImageKit URL params

        //AI features- tracks what AI processing has been applied
        backgroundRemoved: v.optional(v.boolean()), //has backround been removed

        //organization
        folderId: v.optional(v.id("folders")), //optional folder organization

        //timestamps
        createdAt: v.number(), //timestamp of creation 
        updatedAt: v.number(), //last edit time
    }).index("by_users",["userId"])
    .index("by_user_updated",["userId", "updatedAt"])
    .index("by_folder",["folderId"]),//projects in folder

    folders: defineTable({
        name: v.string(),
        userId: v.id("users"), //folder nname
        createdAt: v.number(), 
    }).index("by_user",["userId"]), //user's folders


});

    // PLAN LIMITS EXAMPLE:
    // - free: 3projects, 20 exports/month, basic features only 
    // -pro: Unlimited projects/exports, all AI features