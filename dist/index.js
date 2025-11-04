// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  products;
  teamMembers;
  stats;
  constructor() {
    this.products = /* @__PURE__ */ new Map();
    this.teamMembers = /* @__PURE__ */ new Map();
    this.stats = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const products = [
      {
        id: "1",
        name: "Fresh Tilapia - Whole",
        description: "Premium whole tilapia, freshly harvested from Lake Kivu. Perfect for family meals with exceptional taste and quality.",
        price: "from 2,600",
        unit: "RWF per kg",
        category: "fresh",
        imageUrl: "/images/whole-tilapia.png",
        tags: ["Fresh", "Lake Kivu", "Premium"],
        inStock: 1
      },
      {
        id: "2",
        name: "Fresh Tilapia - Fillets",
        description: "Premium boneless tilapia fillets, ready to cook. Perfect for restaurants and quick meals.",
        price: "from 11,000",
        unit: "RWF per kg",
        category: "fresh",
        imageUrl: "/images/tilapia-fillets.jpg",
        tags: ["Boneless", "Restaurant Ready", "Fresh"],
        inStock: 1
      },
      {
        id: "3",
        name: "Fish Powder - Rwanda's First Superfood",
        description: "Premium fish powder made from 100% Lake Kivu tilapia. 13 essential vitamins & minerals, 6g complete protein per serving. Protects against stunting.",
        price: "from 12,000",
        unit: "RWF per kg",
        category: "superfood",
        imageUrl: "/images/fish-powder-250g.jpg",
        tags: ["Superfood", "Nutrition", "Made in Rwanda"],
        inStock: 1
      }
    ];
    const teamMembers = [
      {
        id: "1",
        name: "Kamran Ahmad",
        position: "Founder & CEO",
        education: "MBA from Stanford Business School, Masters from Oxford University and Imperial College London",
        bio: "Upon visiting Rwanda in 2019 Kamran was inspired to build an aquaculture business in Africa to tackle the problem of affordable and sustainable protein production. In pursuit of this mission, he joined Victory Farms, the largest fish farm in East Africa based in Kenya, in 2020, and in late 2021 launched the organization's Rwandan counterpart, founding Kivu Choice.",
        skills: ["Strategy", "Leadership", "Aquaculture"],
        order: 1,
        imageUrl: "/images/team/kamran-ahmad.png",
        linkedinUrl: "https://rw.linkedin.com/in/kheahmad"
      },
      {
        id: "2",
        name: "Emmanuel Bahizi",
        position: "Chief Financial Officer",
        education: "Bachelors degree from University of Pennsylvania, Masters from Harvard University",
        bio: "Bahizi is an energetic servant leader with a focus on social-economic impact. His experience in the finance industry and strong commitment to building scalable businesses are great additions to the Kivu Choice Team where he is overseeing the Finance, HR, and Procurement. Prior to this, Bahizi was Corporate Banking Manager at Bank of Kigali.",
        skills: ["Finance", "Banking", "Operations"],
        order: 2,
        imageUrl: "/images/team/emmanuel-bahizi.png",
        linkedinUrl: "https://rw.linkedin.com/in/emmanuel-bahizi-32b81b96"
      },
      {
        id: "3",
        name: "Benjamin Bizima",
        position: "Commercial Director",
        education: "Bachelor's degree in Business Administration from Mount Kenya University",
        bio: "Ben is an impact-driven leader who takes an active role in leading teams to deliver results. Most recently leading Sales for Bboxx Rwanda, the largest retail solar company in Africa, he will take on responsibility for Kivu Choice's commercial operations and expansion.",
        skills: ["Sales", "Commercial", "Solar Energy"],
        order: 3,
        imageUrl: "/images/team/benjamin-bizima.jpg",
        linkedinUrl: "https://rw.linkedin.com/in/benjamin-bizima-120a76131"
      },
      {
        id: "5",
        name: "Gordon Bradford",
        position: "Group Engineering & Construction Director",
        education: "Over 3 decades of experience",
        bio: "Gordon Bradford has over 3 decades of experience in construction, maintenance, security, and project management in Africa. Gordon started his aquaculture career with Victory Farms in Kenya for one year before moving over to Rwanda and was the first employee at Kivu Choice.",
        skills: ["Construction", "Engineering", "Project Management"],
        order: 4,
        imageUrl: "/images/team/gordon-bradford.jpg",
        linkedinUrl: null
      },
      {
        id: "6",
        name: "Ronah Nabukeera",
        position: "Hatchery Manager",
        education: "Bachelors degree in Fisheries and Aquaculture",
        bio: "Ronah is an experienced hatchery expert with experience spanning over 10 years in Uganda, Kenya, Ghana, and Rwanda. Her keen ability to develop and manage people while getting excellent results makes her a great resource for Kivu Choice. Her hobbies include travelling and experiencing different cultures.",
        skills: ["Hatchery", "Aquaculture", "Team Development"],
        order: 5,
        imageUrl: "/images/team/ronah-nabukeera.jpg",
        linkedinUrl: null
      },
      {
        id: "7",
        name: "Fred Yaw Asem",
        position: "Lake Aquaculture Operations Manager",
        education: "MBA Global Business and Sustainability, BSc Fisheries and Aquatic Science",
        bio: "Fred is a distinguished leader in aquaculture and agribusiness management with over a decade of international experience.",
        skills: ["Aquaculture", "Operations", "Sustainability"],
        order: 6,
        imageUrl: "/images/team/fred-asem.jpg",
        linkedinUrl: null
      },
      {
        id: "8",
        name: "Jacques Kagabo",
        position: "Senior Manager, Data and Technology",
        education: "Bachelor's degree in Computer Science from Kigali Institute of Science and Technology, MBA from Mount Kenya University",
        bio: "Jacques brings extensive experience across different industries, including telecommunications and solar energy with a strong focus on commercial operations and execution. A dedicated data strategist, he excels in harnessing data to drive business innovation and optimize operations. His expertise spans advanced data analytics, UI/UX design, product management, and software development.",
        skills: ["Data Analytics", "Technology", "Business Innovation"],
        order: 7,
        imageUrl: "/images/team/jacques-kagabo.jpg",
        linkedinUrl: "https://www.linkedin.com/in/jacques-kagabo/"
      },
      {
        id: "9",
        name: "David Kwizera",
        position: "Logistics Manager",
        education: "Bachelor's degree in Business Information Technology from Mount Kenya University",
        bio: "David is a proficient and outcome-driven leader with extensive experience in logistics and supply chain management, acquired from roles at DHL, Abahizi Rwanda, and Wasoko.",
        skills: ["Logistics", "Supply Chain", "Operations"],
        order: 8,
        imageUrl: "/images/team/david-kwizera.jpg",
        linkedinUrl: "https://www.linkedin.com/in/david-kwizera-3a4646169/"
      },
      {
        id: "10",
        name: "Ariella R. Isamaza",
        position: "Human Resources Manager",
        education: "Bachelor's Degree in Economics, Master's Degree in Business Administration",
        bio: "Ariella is a dynamic and results-oriented HR professional with hands on experience in implementing, and managing human resource operations. She has proven track record of driving organizational success through strategic talent acquisition, employee engagement, and performance management. She is passionate about creating inclusive environments that promote diversity and equity.",
        skills: ["Human Resources", "Employee Engagement", "Performance Management"],
        order: 9,
        imageUrl: "/images/team/ariella-isamaza.jpg",
        linkedinUrl: "https://www.linkedin.com/in/ariella-isamaza-rutabana-4472a4172/"
      }
    ];
    const stats = [
      {
        id: "1",
        value: "400MT",
        label: "Monthly Harvest",
        description: "Premium Quality",
        order: 1
      },
      {
        id: "2",
        value: "60M+",
        label: "Fingerlings Annually",
        description: "Lake Kivu Excellence",
        order: 2
      },
      {
        id: "3",
        value: "600+",
        label: "Jobs Created",
        description: "Job Creation",
        order: 3
      },
      {
        id: "4",
        value: "100%",
        label: "Sustainable",
        description: "Sustainable Farming",
        order: 4
      }
    ];
    products.forEach((product) => this.products.set(product.id, product));
    teamMembers.forEach((member) => this.teamMembers.set(member.id, member));
    stats.forEach((stat) => this.stats.set(stat.id, stat));
  }
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = {
      ...insertProduct,
      id,
      imageUrl: insertProduct.imageUrl || null,
      tags: insertProduct.tags || null,
      inStock: insertProduct.inStock || null
    };
    this.products.set(id, product);
    return product;
  }
  async getTeamMembers() {
    return Array.from(this.teamMembers.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  async getTeamMember(id) {
    return this.teamMembers.get(id);
  }
  async createTeamMember(insertMember) {
    const id = randomUUID();
    const member = {
      ...insertMember,
      id,
      education: insertMember.education || null,
      skills: insertMember.skills || null,
      order: insertMember.order || null,
      imageUrl: insertMember.imageUrl || null,
      linkedinUrl: insertMember.linkedinUrl || null
    };
    this.teamMembers.set(id, member);
    return member;
  }
  async getStats() {
    return Array.from(this.stats.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  async createStats(insertStats) {
    const id = randomUUID();
    const stats = {
      ...insertStats,
      id,
      description: insertStats.description || null,
      order: insertStats.order || null
    };
    this.stats.set(id, stats);
    return stats;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });
  app2.get("/api/team/:id", async (req, res) => {
    try {
      const teamMember = await storage.getTeamMember(req.params.id);
      if (!teamMember) {
        return res.status(404).json({ message: "Team member not found" });
      }
      res.json(teamMember);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team member" });
    }
  });
  app2.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
