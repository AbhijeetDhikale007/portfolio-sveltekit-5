type Projects = [{name: string, Type: string, urlGit: string, urlDeploy: string, Duration: string, Details: string, From: string, To: string}]

export const P1: Projects = [
    { name: 'Portfolio', Type: 'Website', urlGit: 'https://github.com/AbhijeetDhikale007/Porfolio', urlDeploy: 'https://abhijeetdhikale007.vercel.app', Duration: '2 Months 25 Days', Details: 'Developed a personal portfolio website using React showcasing skills in web development. It includes header, hero, navbar, profile, education, skills, contact, footer and some 3D interactive objects by using react- three-fiber.', From: '2 July 2024', To: '27 Sep 2024' }
]

export const P2: Projects = [
    { name: 'Portfolio', Type: 'Website', urlGit: '', urlDeploy: '', Duration: '2 Months 16 Days', Details: 'Developed a more advanced personal portfolio website using Svelte showcasing skills in web development. It includes header, hero, navbar, profile, education, skills, contact and footer.', From: '2 Oct 2024', To: '18 Dec 2024' }
]

export default {P1, P2}