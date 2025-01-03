export const navigation = [
  {
    name: "Overview",
    menu: [
      {
        label: "Learning Management",
        route: "/learning-management",
        icon: "Blocks",
      },
      { label: "Job Management", route: "/job-management", icon: "Target" },
      { label: "Analytic", route: "/analytics", icon: "AreaChart" },
      { label: "Sales", route: "/sales", icon: "DiamondPercent" },
      { label: "SaaS", route: "/saas", icon: "BadgeDollarSign" },
    ],
  },
  {
    name: "Management",
    menu: [
      {
        icon: "Users",
        label: "Users",
        route: "/users",
        children: [
          { label: "List", route: "/users" },
          { label: "Edit", route: "/users/3" },
          { label: "Create", route: "/users/create" },
          { label: "Profile", route: "/users/profile" },
        ],
      },
      {
        icon: "Store",
        label: "Products",
        route: "/products",
        children: [
          { label: "List", route: "/products" },
          { label: "Edit", route: "/products/1" },
          { label: "Create", route: "/products/create" },
          { label: "Details", route: "/products/details" },
        ],
      },
      {
        label: "Orders",
        route: "/orders",
        icon: "ShoppingBag",
        children: [
          { label: "List", route: "/orders" },
          { label: "Details", route: "/orders/1" },
        ],
      },
      {
        label: "Invoices",
        route: "/invoices",
        icon: "ReceiptText",
        children: [
          { label: "List", route: "/invoices" },
          { label: "Edit", route: "/invoices/INV-0012" },
          { label: "Create", route: "/invoices/create" },
          { label: "Details", route: "/invoices/INV-0012/details" },
        ],
      },
    ],
  },
  {
    name: "Others",
    menu: [
      {
        label: "Account Settings",
        route: "/settings",
        icon: "UserCog",
        children: [
          { label: "Profile Info", route: "/settings" },
          { label: "Security", route: "/settings/security" },
          { label: "Plan & Billing", route: "/settings/plan-billing" },
          {
            label: "Two Factor Authentication",
            route: "/settings/two-factor-authentication",
          },
          { label: "Notification", route: "/settings/notification" },
          {
            label: "Social Media Links",
            route: "/settings/social-media-links",
          },
          {
            label: "Account Deactivation",
            route: "/settings/account-deactivation",
          },
        ],
      },
      {
        icon: "Fingerprint",
        label: "Authentication",
        route: "/sessions",
        children: [
          { label: "Login", route: "/login" },
          { label: "Register", route: "/register" },
          { label: "Forget Password", route: "/forget-password" },
          { label: "Verify Email", route: "/verification" },
          { label: "Not Found", route: "/**/123" },
          { label: "Server Error", route: "/server-error" },
          { label: "Maintenance", route: "/maintenance" },
        ],
      },
      {
        icon: "Headset",
        label: "Support",
        route: "/support",
        children: [
          { label: "Overview", route: "/support" },
          { label: "Tickets", route: "/support/tickets" },
          { label: "Create Ticket", route: "/support/create-ticket" },
          { label: "FAQs", route: "/support/faqs" },
          { label: "Contact", route: "/support/contact" },
        ],
      },
    ],
  },
];
