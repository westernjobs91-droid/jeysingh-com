"use client";
import { useState } from "react";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Cloud Computing Foundations",
    topics: ["IaaS vs PaaS vs SaaS", "Deployment models", "Cloud providers"],
    notes: `Cloud computing delivers computing resources over the internet using remote servers in data centers. Instead of buying and maintaining hardware, you pay only for what you use.

The three service models define who manages which layer of the stack.

IaaS (Infrastructure as a Service): You rent virtualized compute, storage, and networking. You manage the OS upward. The provider handles hardware, network, and virtualization. Azure example: Virtual Machines.

PaaS (Platform as a Service): Managed platform for deploying apps. Provider handles OS, runtime, and middleware. You manage your app and data only. Azure example: Azure App Service.

SaaS (Software as a Service): Complete software delivered over the internet on subscription. Provider manages everything including the application. Examples: Microsoft 365, Salesforce.

The analogy to remember: IaaS is renting land and building. PaaS is renting a furnished house and decorating. SaaS is staying in a hotel where everything is handled for you.

The four deployment models: Public cloud is shared infrastructure from third-party vendors. Private cloud is dedicated infrastructure for one organization. Hybrid cloud combines public and private. Multi-cloud uses multiple providers simultaneously to avoid vendor lock-in.

The three major cloud providers: Azure excels at enterprise and hybrid workloads. AWS has the broadest service catalog and largest market share. GCP leads in data analytics and AI with BigQuery and Vertex AI.`,
    cheatsheet: [
      { term: "IaaS", def: "You manage OS upward. Provider manages hardware. Azure example: Virtual Machines." },
      { term: "PaaS", def: "You manage app and data only. Provider manages OS and runtime. Azure example: App Service." },
      { term: "SaaS", def: "You manage nothing. Provider manages everything. Example: Microsoft 365." },
      { term: "Public cloud", def: "Shared infrastructure managed by third-party vendors. Pay-as-you-go. Azure, AWS, GCP." },
      { term: "Private cloud", def: "Dedicated infrastructure for one organization. Full control, high cost. Used in finance and healthcare." },
      { term: "Hybrid cloud", def: "Mix of public and private. Sensitive data stays private, other workloads use public cloud." },
      { term: "Multi-cloud", def: "Using multiple cloud providers simultaneously. Avoids vendor lock-in. Best-of-breed services." },
      { term: "Azure", def: "Best for enterprise, hybrid cloud, Microsoft ecosystem. Migration tool: Azure Migrate." },
      { term: "AWS", def: "Largest market share, broadest service catalog. Migration tool: AWS Migration Hub." },
      { term: "GCP", def: "Best for data analytics (BigQuery) and AI/ML (Vertex AI). Migration tool: Google Cloud Migrate." },
    ],
    quiz: [
      { q: "Which service model lets developers focus only on their app and data?", options: ["IaaS", "PaaS", "SaaS", "None of the above"], correct: 1, exp: "PaaS is the model where the provider manages OS, runtime, and middleware. You only write and deploy code. Azure App Service is the classic PaaS example." },
      { q: "Which deployment model is best for regulated industries needing full control?", options: ["Public cloud", "Hybrid cloud", "Private cloud", "Multi-cloud"], correct: 2, exp: "Private cloud gives full control and highest security. Used in finance, healthcare, and government where data privacy is non-negotiable." },
      { q: "A cloud computing service can be categorized into which offerings?", options: ["IaaS only", "IaaS, PaaS, and SaaS", "IaaS, PaaS, SaaS, and CaaS", "PaaS and SaaS only"], correct: 1, exp: "The three primary service models are IaaS, PaaS, and SaaS. CaaS (Containers as a Service) is not one of the three primary models." },
      { q: "Which cloud provider is best known for data analytics and AI/ML capabilities?", options: ["Azure", "AWS", "GCP", "All are equal"], correct: 2, exp: "GCP leads in data analytics with BigQuery and AI/ML with Vertex AI and TensorFlow. Azure excels at enterprise/hybrid. AWS has the broadest overall catalog." },
    ],
  },
  {
    id: 2,
    title: "Cloud Adoption Strategy and Business Outcomes",
    topics: ["Adoption motivators", "Business outcomes", "Financial considerations", "CAPEX vs OPEX"],
    notes: `Cloud adoption is driven by five key motivators: cost savings, scalability, agility, innovation, and BCDR (Business Continuity and Disaster Recovery).

BCDR is a top motivator in regulated industries. A financial institution that can recover systems in minutes instead of days has a real competitive advantage - cloud makes this achievable without a secondary data center.

Cloud adoption produces three categories of business outcomes. Increased revenue and reduced costs: cloud eliminates capital expenditure on hardware and data center operations. Netflix moved to AWS and eliminated physical servers, paying only for demand usage. Improved scalability and reliability: Airbnb dynamically scales infrastructure with user demand and fails over to a secondary region during outages. Increased agility and innovation: GE teams spin up resources instantly for new projects. NASA uses cloud to process vast space mission data rapidly.

Financial considerations: TCO (Total Cost of Ownership) is the full cost of IT including hardware, software, maintenance, support, and migration. ROI measures the financial benefit of cloud adoption versus the cost of migration. Cloud pricing models include pay-as-you-go, reserved instances (up to 72% savings for steady workloads), and spot instances.

The CAPEX to OPEX shift is critical: cloud converts upfront hardware investment (CAPEX) into ongoing usage-based costs (OPEX). CFOs care deeply about this - it changes the financial planning model and is often preferred for budget flexibility.

Key stakeholders in any migration: Executive Sponsors provide strategic direction. Finance manages cost assessment and oversight. Application Owners know the dependencies. Technical Teams execute the work. Line of Business Managers ensure department needs are met.`,
    cheatsheet: [
      { term: "BCDR", def: "Business Continuity and Disaster Recovery. Top motivator in regulated industries. Cloud makes multi-region recovery affordable." },
      { term: "CAPEX", def: "Capital Expenditure. Upfront hardware investment. What cloud replaces." },
      { term: "OPEX", def: "Operational Expenditure. Ongoing usage-based costs. How cloud billing works." },
      { term: "TCO", def: "Total Cost of Ownership. Full IT cost including hardware, software, maintenance, support, and migration." },
      { term: "ROI", def: "Return on Investment. Financial benefit of cloud adoption vs. cost of migration." },
      { term: "Reserved instances", def: "Pre-pay for consistent workloads. Up to 72% savings vs. pay-as-you-go." },
      { term: "CCoE", def: "Cloud Center of Excellence. Accelerates adoption, builds reusable patterns, maintains cloud platform." },
      { term: "CAF", def: "Cloud Adoption Framework. Microsoft's lifecycle framework: Define Strategy, Plan, Ready, Adopt, Govern, Manage." },
    ],
    quiz: [
      { q: "Which financial consideration involves shifting IT expenses from upfront investments to ongoing usage-based costs?", options: ["TCO", "ROI", "OPEX vs CAPEX", "Cloud pricing models"], correct: 2, exp: "OPEX vs CAPEX directly describes the shift from upfront hardware investment to ongoing usage-based cloud billing. TCO is total cost. ROI is return analysis. Pricing models are pay-as-you-go vs reserved." },
      { q: "Which of these is NOT a common business outcome of cloud migration?", options: ["Increased revenue", "Improved scalability", "Adopt new technologies driven by curiosity", "Increased agility"], correct: 2, exp: "Adopt new technologies driven by curiosity has no measurable business value. Valid outcomes are increased revenue, reduced costs, improved scalability, increased agility, and increased innovation." },
      { q: "Which stakeholder is responsible for assessing costs, performing cost optimization analysis, and providing financial oversight?", options: ["Executive Sponsors", "Finance", "Application Owners", "Technical Teams"], correct: 1, exp: "Finance stakeholders manage all financial aspects - cost/benefit assessment, cost optimization analysis, and financial oversight throughout the project." },
      { q: "What does the Cloud Center of Excellence (CCoE) primarily do?", options: ["Manage security risks", "Accelerate cloud adoption and build reusable patterns", "Design reference architectures", "Provide cloud services"], correct: 1, exp: "The CCoE's primary duty is to accelerate cloud adoption. It builds reusable deployment packages, maintains the cloud platform, and standardizes tools. It is not the security team or architecture team." },
    ],
  },
  {
    id: 3,
    title: "Cloud Service Models Deep Dive",
    topics: ["Shared responsibility model", "IaaS in depth", "PaaS in depth", "SaaS in depth"],
    notes: `The shared responsibility model defines exactly which layers you manage versus which the cloud provider manages. Data and Access is always your responsibility - even in SaaS. This is tested heavily on AZ-104.

In IaaS you manage: Data, Applications, Runtime, Operating System. Provider manages: Virtual Machine, Compute, Networking, Storage.

In PaaS you manage: Data and Applications only. Provider manages everything else including OS and Runtime.

In SaaS the provider manages everything. You only consume the software.

The Pizza-as-a-Service analogy: On-premises means you do everything - buy kitchen, oven, ingredients, cook. IaaS means the provider gives you the kitchen and oven, you bring ingredients and cook. PaaS means the provider gives kitchen, oven, and dough - you choose toppings and cook. SaaS means you walk in and the pizza is already made.

Common IaaS business scenarios: Development and testing environments (spin up and deprovision quickly), lift-and-shift migration (Azure Site Recovery), storage and backup (Azure Blob Storage), web application hosting on VMs, and high-performance computing for simulations.

Key Azure IaaS services: Azure Virtual Machines for scalable compute, VM Scale Sets for automatic scaling groups, Azure Virtual Network for isolated private networks, Azure Storage for blobs and files, Azure Load Balancer for traffic distribution.

Key Azure PaaS services: Azure App Service for web apps and APIs (supports .NET, Node.js, Java, Python, PHP, Ruby), Azure SQL Database for managed relational database, Azure Functions for serverless compute, Azure Kubernetes Service for container orchestration.`,
    cheatsheet: [
      { term: "Shared responsibility", def: "Defines who manages what. Data and Access = always yours, even in SaaS." },
      { term: "IaaS you manage", def: "Data, Applications, Runtime, OS. Provider manages compute, networking, storage, virtualization." },
      { term: "PaaS you manage", def: "Data and Applications only. Provider manages OS, runtime, middleware, and infrastructure." },
      { term: "SaaS you manage", def: "Nothing. Provider manages everything including the application itself." },
      { term: "Azure VM Scale Sets", def: "Create and manage groups of identical VMs with automatic scaling based on demand." },
      { term: "Azure App Service", def: "Fully managed PaaS for web apps, REST APIs, mobile backends. Supports .NET, Node.js, Java, Python, PHP, Ruby." },
      { term: "Azure Functions", def: "Serverless compute. Run code on demand, no VM or server management. Event-driven." },
      { term: "Azure Load Balancer", def: "Distributes incoming network traffic across multiple VMs for HA and scalability. Layer 4." },
    ],
    quiz: [
      { q: "In which service model is data and access ALWAYS your responsibility?", options: ["IaaS only", "IaaS and PaaS", "PaaS and SaaS", "All models including SaaS"], correct: 3, exp: "Data and Access is always the customer's responsibility in every service model - IaaS, PaaS, and SaaS. Even when a provider manages everything else, you are responsible for who can access your data." },
      { q: "In the pizza analogy, which model means the provider gives you the kitchen and oven but you bring ingredients and cook?", options: ["On-premises", "IaaS", "PaaS", "SaaS"], correct: 1, exp: "IaaS in the pizza analogy means the provider supplies the kitchen and oven (infrastructure) but you bring dough and toppings (OS, apps, data) and do the cooking (management)." },
      { q: "Which Azure service automatically scales a group of identical VMs based on demand?", options: ["Azure Load Balancer", "Azure App Service", "VM Scale Sets", "Azure Functions"], correct: 2, exp: "Azure VM Scale Sets create and manage groups of identical VMs that automatically scale up or down based on demand or a schedule. Load Balancer distributes traffic. App Service is PaaS. Functions is serverless." },
      { q: "Which layer does the provider manage in IaaS but NOT in on-premises?", options: ["Data", "Applications", "Operating System", "Compute and Networking"], correct: 3, exp: "In IaaS, the provider manages the physical compute, networking, and storage hardware - the layers below the OS. In on-premises, you own and manage all of these physical resources yourself." },
    ],
  },
  {
    id: 4,
    title: "Migration Approaches and Strategies",
    topics: ["The 4 Rs", "Retire, Rehost, Replatform, Refactor", "When to use each strategy"],
    notes: `The four migration strategies define what you do with each workload when moving to cloud.

Retire: Decommission apps no longer serving a business purpose. Eliminates maintenance cost and reduces security attack surface. No cloud benefit but simplifies the environment.

Rehost (Lift and Shift): Move the application to a cloud VM with no code changes. Architecture stays intact. Uses IaaS. Fastest to implement with minimal developer impact. Still saves cost versus on-premises hardware. Downside: misses cloud-native capabilities and technical debt carries forward. Azure example: moving on-premises Windows Server to Azure VM via Azure Site Recovery.

Replatform (Lift-Tinker-Shift): Make targeted modifications to adopt PaaS without rewriting the core architecture. The classic example: migrating a .NET web app from an Azure VM to Azure App Service. Code changes minimally but the hosting model changes to managed PaaS. Benefits: better resource utilization, reduced OS and patch management, improved availability. More effort than rehosting but delivers real cloud benefits.

Refactor (Rearchitect): Restructure or rewrite the core architecture for cloud-native. Break monoliths into microservices, adopt serverless or containers. Highest cloud benefit, highest effort, slowest. Azure example: breaking a monolithic app into microservices on AKS with Azure SQL Database and Azure Service Bus.

The key distinction: Replatforming modifies without changing fundamental architecture. Refactoring restructures the architecture itself. Rehosting does not change anything at all.

When asked to choose a strategy: if the goal is speed or the app is simple - Rehost. If the goal is modernize with minimal code changes - Replatform. If the goal is full cloud-native transformation - Refactor. If the app is no longer needed - Retire.`,
    cheatsheet: [
      { term: "Retire", def: "Decommission. App no longer needed. Reduces cost and attack surface. No cloud benefit." },
      { term: "Rehost", def: "Lift and shift to cloud VM. No code changes. Fastest. Low cloud benefit. Azure Site Recovery." },
      { term: "Replatform", def: "Lift-Tinker-Shift. Targeted changes to adopt PaaS. Core architecture unchanged. Example: VM to App Service." },
      { term: "Refactor", def: "Rearchitect for cloud-native. Microservices, serverless, containers. Highest benefit, highest effort." },
      { term: "Rehost vs Replatform", def: "Rehost = move as-is, no changes. Replatform = move and improve, some changes." },
      { term: "Replatform vs Refactor", def: "Replatform = some changes, architecture intact. Refactor = rewrite the architecture itself." },
      { term: "Azure Site Recovery", def: "Azure tool for lift-and-shift VM migration. Replicates on-premises VMs to Azure." },
    ],
    quiz: [
      { q: "Which strategy involves no code changes and moves the app to the cloud as-is?", options: ["Refactor", "Replatform", "Rehost", "Retire"], correct: 2, exp: "Rehost (lift and shift) moves the application to cloud with no significant modifications. It uses IaaS and preserves existing architecture exactly. Fastest but lowest cloud benefit." },
      { q: "Moving a .NET app from an Azure VM to Azure App Service is an example of which strategy?", options: ["Refactor", "Rehost", "Retire", "Replatform"], correct: 3, exp: "Replatforming makes targeted modifications to adopt PaaS without rewriting the core architecture. VM to App Service is the classic replatforming example - the code barely changes but the hosting model moves to managed PaaS." },
      { q: "Which strategy should you choose when an app is outdated and no longer serves a business purpose?", options: ["Rehost", "Replatform", "Retire", "Refactor"], correct: 2, exp: "Retire means decommissioning apps that are no longer needed. It eliminates maintenance costs, reduces the security attack surface, and simplifies the environment." },
      { q: "What is the key difference between replatforming and refactoring?", options: ["Replatform is faster", "Replatform keeps core architecture intact; refactor restructures it", "Refactor uses less code changes", "They are the same strategy"], correct: 1, exp: "Replatforming makes targeted modifications without touching the fundamental architecture. Refactoring restructures or rewrites the core architecture itself for cloud-native capabilities like microservices and serverless." },
    ],
  },
  {
    id: 5,
    title: "Replatforming to Azure App Service",
    topics: ["Azure App Service features", "Creating a web app", "Supported languages", "DevOps integration"],
    notes: `Azure App Service is a fully managed PaaS platform for hosting web applications, REST APIs, and mobile backends over HTTPS. It is the primary replatforming target when moving .NET, Node.js, Java, Python, PHP, or Ruby web apps away from IaaS VMs.

Key features of Azure App Service: The platform auto-patches and maintains the OS and language frameworks - you focus on code. It supports manual or automatic scaling with global datacenter infrastructure. Security and compliance: ISO, SOC, and PCI compliance built in. DevOps integration: CI/CD with Azure DevOps, GitHub, BitBucket, Docker Hub, and Azure Container Registry. Built-in authentication with Azure AD, Google, Facebook, Twitter, and Microsoft accounts. Staging environments: deployment slots let you test in staging before swapping to production with near-zero downtime.

Language support: .NET, .NET Core, Java, Ruby, Node.js, PHP, and Python. All are supported - this is a frequent exam question.

Creating an Azure Web App in 9 steps: Sign in to portal.azure.com. Click Create a resource. Search for Web App. Configure Basics: subscription, resource group, app name, OS, runtime stack, region, App Service Plan. Configure additional settings for deployment, networking, Application Insights. Review and create. Wait for deployment. Access via the URL shown on the overview page. The default domain URL shows a placeholder page confirming the app is live.

Pricing: pay only for Azure compute resources used, based on the App Service Plan selected. The Free tier (F1) is available for development and testing.

App Service is the right answer when you want to eliminate OS patching, get built-in autoscaling, and use deployment slots for safer releases - as long as you do not need OS-level customization.`,
    cheatsheet: [
      { term: "Azure App Service", def: "Fully managed PaaS for web apps, REST APIs, mobile backends. Auto-patches OS, built-in scaling, deployment slots." },
      { term: "Supported languages", def: ".NET, .NET Core, Java, Ruby, Node.js, PHP, Python - all supported. This is a common exam question." },
      { term: "Deployment slots", def: "Separate live environments (staging) with their own URL. Swap to production with near-zero downtime. Instant rollback available." },
      { term: "App Service Plan", def: "Defines compute resources and pricing tier. Free (F1), Shared (D1), Basic, Standard, Premium, Isolated." },
      { term: "CI/CD support", def: "Integrates with Azure DevOps, GitHub, BitBucket, Docker Hub, Azure Container Registry for automated deployments." },
      { term: "Built-in auth", def: "Azure AD, Google, Facebook, Twitter, Microsoft accounts. No code needed for basic authentication." },
      { term: "Zone redundancy", def: "Distributes instances across availability zones. Requires minimum 3 instances. Premium tier only." },
    ],
    quiz: [
      { q: "Which programming languages are supported by Azure App Service?", options: [".NET and Java only", "PHP and Python only", "All of the above (.NET, Java, PHP, Python, Node.js, Ruby)", ".NET Core and Node.js only"], correct: 2, exp: "Azure App Service supports ALL of: .NET, .NET Core, Java, Ruby, Node.js, PHP, and Python. The answer is always 'all of the above' when options list subsets of these languages." },
      { q: "What is a deployment slot in Azure App Service?", options: ["A pricing tier", "A separate live environment for testing before production swap", "A language runtime option", "A networking configuration"], correct: 1, exp: "A deployment slot is a separate live instance (like staging) with its own URL. You deploy and test there, then swap into production with near-zero downtime. You can swap back instantly if something breaks." },
      { q: "What is the primary advantage of App Service over a VM for hosting a web app?", options: ["Lower cost always", "Full OS-level control", "No OS patching, built-in autoscaling, deployment slots", "Supports more languages"], correct: 2, exp: "App Service eliminates OS patching, provides built-in autoscaling, and offers deployment slots for safer releases. The trade-off is less OS-level control - but most web apps do not need that." },
      { q: "Which statement about App Service pricing is correct?", options: ["You pay per request", "You pay based on the App Service Plan selected", "It is always free", "You pay per language runtime"], correct: 1, exp: "App Service pricing is based on the App Service Plan - the compute tier you select. A Free plan (F1) exists for testing. Production workloads use Basic, Standard, or Premium plans." },
    ],
  },
  {
    id: 6,
    title: "Replatforming to PaaS Databases",
    topics: ["DBMS types", "Azure Database for MySQL", "Offline migration methods", "When to use PaaS databases"],
    notes: `A Database Management System (DBMS) is software that stores, retrieves, and queries data. It acts as a bridge between users and databases, handling data management, the database engine, and the schema. Key capabilities: security, integrity, concurrency, administration, and normalization.

The five types of DBMS: Relational organizes data in tables with rows and columns, uses SQL. Most common (MySQL, SQL Server). Distributed spreads databases across a network with centralized management. Hierarchical arranges data in a tree-like parent-child structure. Object-Oriented stores data as objects similar to OOP. Network allows records to have multiple parent and child records, more flexible than hierarchical.

Azure Database for MySQL is a fully managed PaaS database service. Key characteristics: central administrative point for multiple databases within a single server resource. Creating the server creates a namespace for databases - deleting the server deletes all contained databases. Can host a single database (dedicated resources) or multiple databases (shared resources). Pricing is per-server based on pricing tier, vCores, and storage in GB.

Two offline migration options for moving on-premises MySQL to Azure: Export and Import uses MySQL Workbench to export the database and import it into Azure Database for MySQL - best for selective migration of specific tables. Dump and Restore uses mysqldump tool for a full database dump then restore to Azure - best for efficiently moving the entire database in one operation.

An offline migration takes a snapshot of the source database at a point in time. Changes made to the source after the snapshot are NOT reflected in the target. This is the key limitation of offline migration.

Replatforming to Azure Database for MySQL eliminates OS patching, database patching, backups, and HA configuration - all handled by Azure. This is why it is one of the most common replatforming moves.`,
    cheatsheet: [
      { term: "Relational DBMS", def: "Data in tables with rows and columns. Uses SQL. Most common type. Examples: MySQL, SQL Server, PostgreSQL." },
      { term: "Azure DB for MySQL", def: "Fully managed PaaS MySQL. Azure handles patching, backups, HA. Pricing: per-server, based on tier, vCores, storage." },
      { term: "Export and Import", def: "Offline migration using MySQL Workbench. Best for selective migration of specific databases or tables." },
      { term: "Dump and Restore", def: "Offline migration using mysqldump. Full database export then restore. Best for moving entire database at once." },
      { term: "Offline migration", def: "Point-in-time snapshot of source. Changes after snapshot NOT replicated to target. Requires downtime window." },
      { term: "Delete server = delete all DBs", def: "In Azure Database for MySQL, the server is the parent resource. Deleting it deletes all contained databases." },
      { term: "PaaS DB benefit", def: "Eliminates OS patching, DB engine patching, manual backups, HA configuration. Azure handles all of it." },
    ],
    quiz: [
      { q: "What is an example of an Azure DBMS service?", options: ["Azure Service Bus", "Azure Active Directory", "Azure Event Hub", "Azure Database for MySQL"], correct: 3, exp: "Azure Database for MySQL is a managed database service (DBMS). Azure Service Bus is a messaging service. Azure AD is identity management. Azure Event Hub is a data streaming service." },
      { q: "What is the primary difference between replatforming and refactoring?", options: ["Replatforming breaks apps into microservices", "Replatforming modifies without changing architecture; refactoring restructures core architecture", "Refactoring moves apps without any modifications", "They are two terms for the same strategy"], correct: 1, exp: "Replatforming makes targeted modifications without changing the fundamental architecture. Refactoring restructures or rewrites the core architecture for cloud-native capabilities like microservices, serverless, and containers." },
      { q: "What happens to databases when you delete an Azure Database for MySQL server?", options: ["They are backed up automatically", "They move to another server", "All databases in that server are deleted", "They become standalone databases"], correct: 2, exp: "In Azure Database for MySQL, the server is the parent resource that provides a namespace. Deleting the server permanently deletes all contained databases. Always back up before deleting a server." },
      { q: "Which migration method is best for moving an entire MySQL database in one operation?", options: ["Export and Import using MySQL Workbench", "Dump and Restore using mysqldump", "Azure Migrate appliance", "Azure Database Migration Service"], correct: 1, exp: "Dump and Restore using the mysqldump tool performs a full database export then restores the entire database to Azure at once. Export and Import using MySQL Workbench is better for selective migration of specific tables." },
    ],
  },
];

type QuizAnswers = { [modId: number]: { [qIdx: number]: number } };

export default function CloudMigrationPage() {
  const [activeTab, setActiveTab] = useState<{ [id: number]: "notes" | "cheatsheet" | "quiz" }>({});
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [expanded, setExpanded] = useState<number | null>(1);

  const getTab = (id: number) => activeTab[id] || "notes";
  const setTab = (id: number, tab: "notes" | "cheatsheet" | "quiz") =>
    setActiveTab(p => ({ ...p, [id]: tab }));
  const answer = (modId: number, qIdx: number, choice: number) => {
    setAnswers(p => ({ ...p, [modId]: { ...(p[modId] || {}), [qIdx]: choice } }));
  };

  const getScore = (modId: number) => {
    const mod = modules.find(m => m.id === modId);
    if (!mod) return null;
    const ans = answers[modId] || {};
    const answered = Object.keys(ans).length;
    if (answered === 0) return null;
    const correct = mod.quiz.filter((q, i) => ans[i] === q.correct).length;
    return { correct, total: mod.quiz.length, answered };
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/learn" style={{ fontSize: "13px", color: "#9d9aba", textDecoration: "none" }}>Learn</Link>
        <span style={{ color: "#6f6c8c", margin: "0 8px" }}>/</span>
        <span style={{ fontSize: "13px", color: "#c3c0dc" }}>Cloud Migration</span>
      </div>

      <div className="pill" style={{ marginBottom: "1.5rem" }}>6 modules</div>
      <h1 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
        <span className="grad-text">Cloud Migration</span>
      </h1>
      <p style={{ fontSize: "15px", color: "#b0adc9", marginBottom: "3rem", maxWidth: "580px", lineHeight: 1.7 }}>
        Study notes covering cloud fundamentals, migration strategy, Azure App Service, and PaaS databases.
        Each module has notes, a cheat sheet, and a quiz with exam-style questions.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {modules.map(mod => {
          const score = getScore(mod.id);
          return (
            <div key={mod.id} className="card" style={{ overflow: "hidden" }}>
              <button
                onClick={() => setExpanded(expanded === mod.id ? null : mod.id)}
                style={{
                  width: "100%", padding: "1.25rem 1.5rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "none", border: "none", cursor: "pointer", textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, fontFamily: "monospace",
                    color: "#a78bfa", background: "#2a1f50",
                    border: "1px solid #8b5cf630", padding: "3px 8px", borderRadius: "6px",
                  }}>
                    {String(mod.id).padStart(2, "0")}
                  </span>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#eeeaf8" }}>{mod.title}</div>
                    <div style={{ fontSize: "12px", color: "#9d9aba", marginTop: "2px" }}>
                      {mod.topics.join(" · ")}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {score && (
                    <span style={{
                      fontSize: "11px", padding: "2px 10px", borderRadius: "10px",
                      background: score.correct === score.total ? "#1d9e7515" : "#2a1f50",
                      color: score.correct === score.total ? "#34d399" : "#a78bfa",
                      border: `1px solid ${score.correct === score.total ? "#34d39930" : "#3d2f6e"}`,
                    }}>
                      {score.correct}/{score.total} quiz
                    </span>
                  )}
                  <span style={{
                    color: "#9d9aba", fontSize: "14px",
                    transform: expanded === mod.id ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s", display: "inline-block",
                  }}>v</span>
                </div>
              </button>

              {expanded === mod.id && (
                <div style={{ borderTop: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
                    {(["notes", "cheatsheet", "quiz"] as const).map(tab => (
                      <button key={tab} onClick={() => setTab(mod.id, tab)} style={{
                        padding: "10px 20px", background: "none", border: "none",
                        borderBottom: getTab(mod.id) === tab ? "2px solid #8b5cf6" : "2px solid transparent",
                        color: getTab(mod.id) === tab ? "#a78bfa" : "#9d9aba",
                        fontSize: "13px", fontWeight: getTab(mod.id) === tab ? 500 : 400,
                        cursor: "pointer",
                      }}>
                        {tab === "cheatsheet" ? "Cheat sheet" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div style={{ padding: "1.5rem" }}>
                    {getTab(mod.id) === "notes" && (
                      <div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
                          {mod.topics.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                        {mod.notes.split("\n\n").map((para, i) => (
                          <p key={i} style={{ fontSize: "14px", color: "#c3c0dc", lineHeight: 1.85, marginBottom: "1rem" }}>
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {getTab(mod.id) === "cheatsheet" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {mod.cheatsheet.map(item => (
                          <div key={item.term} style={{
                            display: "grid", gridTemplateColumns: "180px 1fr",
                            gap: "16px", padding: "10px 14px",
                            background: "#a78bfa05", borderRadius: "8px",
                          }}>
                            <span style={{ fontSize: "12px", fontWeight: 600, color: "#a78bfa", fontFamily: "monospace" }}>
                              {item.term}
                            </span>
                            <span style={{ fontSize: "13px", color: "#c3c0dc", lineHeight: 1.6 }}>{item.def}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {getTab(mod.id) === "quiz" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                        {mod.quiz.map((q, qi) => {
                          const selected = answers[mod.id]?.[qi];
                          const answered = selected !== undefined;
                          return (
                            <div key={qi}>
                              <p style={{ fontSize: "14px", fontWeight: 500, color: "#eeeaf8", marginBottom: "10px" }}>
                                <span style={{ color: "#a78bfa", marginRight: "6px" }}>Q{qi + 1}.</span>{q.q}
                              </p>
                              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                {q.options.map((opt, oi) => {
                                  let bg = "#ffffff08", border = "1px solid #352a55", color = "#c3c0dc";
                                  if (answered) {
                                    if (oi === q.correct) { bg = "#2a1f50"; border = "1px solid #8b5cf650"; color = "#a78bfa"; }
                                    else if (oi === selected) { bg = "#1a0505"; border = "1px solid #ef444450"; color = "#f87171"; }
                                  }
                                  return (
                                    <button key={oi} onClick={() => !answered && answer(mod.id, qi, oi)} style={{
                                      padding: "10px 14px", borderRadius: "8px",
                                      background: bg, border, color,
                                      fontSize: "13px", textAlign: "left",
                                      cursor: answered ? "default" : "pointer",
                                      transition: "all 0.15s",
                                    }}>
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>
                              {answered && (
                                <div style={{
                                  marginTop: "10px", padding: "10px 14px",
                                  background: "#a78bfa05", borderRadius: "8px",
                                  fontSize: "13px", color: "#b0adc9", lineHeight: 1.6,
                                  borderLeft: "2px solid #a78bfa",
                                }}>
                                  {q.exp}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
