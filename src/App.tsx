import React ,{useRef} from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedPost } from './components/FeaturedPost';
import { Categories } from './components/Categories';
import { LatestPosts } from './components/LatestPosts';
import { Footer } from './components/Footer';

import { db } from './lib/firbaseConfig';
import { collection, getDocs } from 'firebase/firestore';




interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  category: string;
  status: 'published' | 'draft';
  tags: string[];
}

export default function App() {

  const [currentPage, setCurrentPage] = React.useState('home');


  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredPostRef = useRef<HTMLDivElement>(null);



  const handleNavigate = (page: string) => {
    if (page === "home") heroRef.current?.scrollIntoView({ behavior: "smooth" });
    if (page === "categories") categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (page === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });


    setCurrentPage(page);
  };
 
  
  React.useEffect(() => {
  const testFirebase = async () => {
    try {
      // Try to fetch documents from a test collection
      const querySnapshot = await getDocs(collection(db, "testCollection"));
      console.log("✅ Firebase DB connected! Docs count:", querySnapshot.size);
    } catch (error) {
      console.error("❌ Firebase DB connection failed:", error);
    }
  };

  testFirebase();
}, []);

  

  return (
    <div className="min-h-screen bg-background text-foreground">
     
      <Header currentPage={currentPage}  onNavigate={handleNavigate} />
      <main className="flex-1">
         <div ref={heroRef}><Hero onNavigate={handleNavigate} /></div>
            <div ref={featuredPostRef}><FeaturedPost onNavigate={handleNavigate} posts={[]} /></div>
           <div ref={categoriesRef}> <Categories onNavigate={handleNavigate} /></div>
            <div ref={aboutRef}><LatestPosts onNavigate={handleNavigate} posts={[]} /></div>
      </main>
        <Footer onNavigate={handleNavigate} />
      
    </div>
  );
}