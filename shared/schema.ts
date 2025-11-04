import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  unit: text("unit").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  tags: text("tags").array(),
  inStock: integer("in_stock").default(1),
});

export const teamMembers = pgTable("team_members", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  position: text("position").notNull(),
  education: text("education"),
  bio: text("bio").notNull(),
  skills: text("skills").array(),
  order: integer("order").default(0),
  imageUrl: text("image_url"),
  linkedinUrl: text("linkedin_url"),
});

export const stats = pgTable("stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  value: text("value").notNull(),
  label: text("label").notNull(),
  description: text("description"),
  order: integer("order").default(0),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
}).extend({
  linkedinUrl: z.string().optional().nullable(),
});

export const insertStatsSchema = createInsertSchema(stats).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

export type InsertStats = z.infer<typeof insertStatsSchema>;
export type Stats = typeof stats.$inferSelect;
