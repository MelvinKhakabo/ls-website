import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Pedagogy from '@/pages/Pedagogy'
import Results from '@/pages/Results'
import Programs from '@/pages/Programs'
import Pumac from '@/pages/Pumac'
import Events from '@/pages/Events'
import Team from '@/pages/Team'
import Locations from '@/pages/Locations'
import Admissions from '@/pages/Admissions'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import Policies from '@/pages/Policies'
import Blog from '@/pages/Blog'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'pedagogy', element: <Pedagogy /> },
      { path: 'results', element: <Results /> },
      { path: 'programs', element: <Programs /> },
      { path: 'pumac-africa', element: <Pumac /> },
      { path: 'events', element: <Events /> },
      { path: 'team', element: <Team /> },
      { path: 'locations', element: <Locations /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: 'policies', element: <Policies /> },
      { path: 'blog', element: <Blog /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
