
# Problem Statement
The current landscape of web development and content management systems (CMS) is predominantly centralized, leading to issues of censorship, single points of failure, and lack of true ownership for creators. Additionally, there's a growing need for easy-to-use, decentralized tools that enable Web3 creators to launch and manage their projects efficiently. The complexity of building and hosting decentralized applications (dApps) often creates a barrier for many potential creators and developers in the Web3 space.

# Solution Overview
GreenPress addresses these challenges by providing a decentralized, no-code platform and marketplace for Web3 creators, builders, and developers. Our solution offers tools to quickly and efficiently launch Blogs, dApps, and DeFi platforms hosted on BNB Greenfield. GreenPress combines the ease of use similar to WordPress with the benefits of decentralization and blockchain technology.

# Key Features:
1. Decentralized Template Marketplace
2. Easy-to-use dApp Management Dashboard
3. Customizable Templates
4. Integration with BNB Chain and Greenfield
5. Developer Incentives and Leaderboard

# Technical Architecture
GreenPress is built on three main components:
1. Frontend: NextJS user interface using TailwindCSS & tRPC
2. Backend: Node.js server handling deployments and website compilation
3. Smart Contracts: Solidity contracts on BNB Chain for marketplace transactions

# Tech Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

Repository Links:
1. [Frontend](https://github.com/thedefibuilder/hackathon-bnb-champion)
2. [Backend](https://github.com/thedefibuilder/hackathon-bnb-champion-backend) 
3. [Smart Contracts](https://github.com/thedefibuilder/hackathon-bnb-champion-contracts
)

# Workflows

## Buy Template Workflow

![Screenshot from 2024-08-28 21-20-04.png](https://cdn.dorahacks.io/static/files/1919a47095bdb3ae8a346ff439fa7bb1.png)

1. User browses the GreenPress Marketplace
2. User purchases template on bnb chain
3. Smart Contract adds the user to the group and sends the creator a share
4. Transactions from BNB chain are relayed to Greenfield
5. User gains access to template files on Greenfield
6. User Downloads template files


## Deploy Website Workflow

![Screenshot from 2024-08-28 21-21-33.png](https://cdn.dorahacks.io/static/files/1919a48908f5031b6754a4d493995b30.png)

1. User accesses the Management Dashboard
2. Customizes ans sets up the purchased template (colors, fonts, layout, bnb domain)
3. The website is compiled using our backend
4. User calls deployWebsite method to create a new bucket for hosting
5. Deploys the static files to Greenfield


## Publish New Template Workflow

![Screenshot from 2024-08-28 21-31-13.png](https://cdn.dorahacks.io/static/files/1919a4a0e129f6670d3b4c94485888c1.png)

1. Developer creates a new template (I.e. react source code)
2. Uploads template files and metadata
3. Sets pricing, thumbnails and description
4. The template is listed on the marketplace

# Template Marketplace
Our marketplace features a variety of templates including:
- Token Landing Pages (3 variations)
- NFT Collection Pages (3 variations)
- DAO Voting Platform
- Customizable Blog

Users can easily find and purchase templates using our search and filter system, aided by ratings, sales figures, and community comments.

# dApp Management Dashboard
The Management Dashboard allows users to:
- Customize frontend elements (graphics, fonts, colors, layouts)
- Drag and Drop Component Elements (text blocks, headings, images)
- Manage Greenfield storage settings
- Configure DNS settings
- Deploy directly to Greenfield

# Developer Incentives
To foster a thriving ecosystem of developers and high-quality templates:
1. Developers can upload and sell their own templates
2. Earn revenue from each sale of their templates
3. Participate in a gamified leaderboard system
4. Gain recognition and build reputation within the GreenPress community

# Vision and Future Plans
GreenPress aims to become the go-to platform for Web3 creators, offering a seamless experience from ideation to fully-fledged project launch on BNB Chain. We plan to expand our template offerings, enhance customization options, and integrate more teamplates to support a wide range of decentralized applications and use cases.

