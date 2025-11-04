import { type Product, type InsertProduct, type TeamMember, type InsertTeamMember, type Stats, type InsertStats } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  // Stats
  getStats(): Promise<Stats[]>;
  createStats(stats: InsertStats): Promise<Stats>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private teamMembers: Map<string, TeamMember>;
  private stats: Map<string, Stats>;

  constructor() {
    this.products = new Map();
    this.teamMembers = new Map();
    this.stats = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize products
    const products: Product[] = [
      {
        id: "1",
        name: "Fresh Tilapia - Whole",
        description: "Premium whole tilapia, freshly harvested from Lake Kivu. Perfect for family meals with exceptional taste and quality.",
        price: "from 2,600",
        unit: "RWF per kg",
        category: "fresh",
        imageUrl: "/images/whole-tilapia.png",
        tags: ["Fresh", "Lake Kivu", "Premium"],
        inStock: 1,
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
        inStock: 1,
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
        inStock: 1,
      },
    ];

    // Initialize team members
    const teamMembers: TeamMember[] = [
      {
        id: "1",
        name: "Kamran Ahmad",
        position: "Founder & CEO",
        education: "MBA from Stanford Business School, Masters from Oxford University and Imperial College London",
        bio: "Upon visiting Rwanda in 2019 Kamran was inspired to build an aquaculture business in Africa to tackle the problem of affordable and sustainable protein production. In pursuit of this mission, he joined Victory Farms, the largest fish farm in East Africa based in Kenya, in 2020, and in late 2021 launched the organization's Rwandan counterpart, founding Kivu Choice.",
        skills: ["Strategy", "Leadership", "Aquaculture"],
        order: 1,
        imageUrl: "/images/team/kamran-ahmad.png",
        linkedinUrl: "https://rw.linkedin.com/in/kheahmad",
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
        linkedinUrl: "https://rw.linkedin.com/in/emmanuel-bahizi-32b81b96",
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
        linkedinUrl: "https://rw.linkedin.com/in/benjamin-bizima-120a76131",
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
        linkedinUrl: null,
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
        linkedinUrl: null,
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
        linkedinUrl: null,
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
        linkedinUrl: "https://www.linkedin.com/in/jacques-kagabo/",
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
        linkedinUrl: "https://www.linkedin.com/in/david-kwizera-3a4646169/",
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
        linkedinUrl: "https://www.linkedin.com/in/ariella-isamaza-rutabana-4472a4172/",
      },
    ];

    // Initialize stats
    const stats: Stats[] = [
      {
        id: "1",
        value: "400MT",
        label: "Monthly Harvest",
        description: "Premium Quality",
        order: 1,
      },
      {
        id: "2",
        value: "60M+",
        label: "Fingerlings Annually",
        description: "Lake Kivu Excellence",
        order: 2,
      },
      {
        id: "3",
        value: "600+",
        label: "Jobs Created",
        description: "Job Creation",
        order: 3,
      },
      {
        id: "4",
        value: "100%",
        label: "Sustainable",
        description: "Sustainable Farming",
        order: 4,
      },
    ];

    products.forEach(product => this.products.set(product.id, product));
    teamMembers.forEach(member => this.teamMembers.set(member.id, member));
    stats.forEach(stat => this.stats.set(stat.id, stat));
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      imageUrl: insertProduct.imageUrl || null,
      tags: insertProduct.tags || null,
      inStock: insertProduct.inStock || null
    };
    this.products.set(id, product);
    return product;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { 
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

  async getStats(): Promise<Stats[]> {
    return Array.from(this.stats.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async createStats(insertStats: InsertStats): Promise<Stats> {
    const id = randomUUID();
    const stats: Stats = { 
      ...insertStats, 
      id,
      description: insertStats.description || null,
      order: insertStats.order || null
    };
    this.stats.set(id, stats);
    return stats;
  }
}

export const storage = new MemStorage();
