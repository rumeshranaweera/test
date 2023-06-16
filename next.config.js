/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TEST: "HELLO",
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
      "pk_test_51NJZntKy1fmVkpgUPvPr30ml5ghwhzFBfLluxVW9MY68ZIOWR1gK4ijRAG1ajEitzr766q6s5CaB75AFM4V4yr9W00V2Lj8k6J",
    STRIPE_SECRET_KEY:
      "sk_test_51NJZntKy1fmVkpgUtUi0NAbph33ELQUhQ6qrVv0pLS091lisRWAOMIMmkSwJigOlTly9vIAgN8vEBSKp7r5Ov84X00xJ6Nkrn2",
  },
};

module.exports = nextConfig;
