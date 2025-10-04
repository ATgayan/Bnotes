import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedPost } from './components/FeaturedPost';
import { Categories } from './components/Categories';
import { LatestPosts } from './components/LatestPosts';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import { AdminDashboard } from './components/AdminDashboard';

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
  const [selectedPostId, setSelectedPostId] = React.useState<string | null>(null);
  
  // Initial mock posts data
  const [posts, setPosts] = React.useState<Post[]>([
    {
      id: '1',
      title: 'The Future of Artificial Intelligence: What to Expect in 2025',
      content: 'Artificial Intelligence has reached a pivotal moment in its evolution...',
      excerpt: 'Explore the groundbreaking developments in AI technology that are set to revolutionize industries and reshape our daily lives.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk1MTExNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '12.5K',
      category: 'AI',
      status: 'published',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Future Tech']
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking the Barriers of Traditional Processing',
      content: 'Dive into the world of quantum computing and discover how it\'s revolutionizing data processing capabilities...',
      excerpt: 'Dive into the world of quantum computing and discover how it\'s revolutionizing data processing capabilities.',
      image: 'https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc1OTQ4NjI1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Marcus Johnson',
      date: '2025-01-14',
      readTime: '6 min read',
      views: '8.2K',
      category: 'Technology',
      status: 'draft',
      tags: ['Quantum Computing', 'Technology', 'Innovation']
    },
    {
      id: '3',
      title: '5G Networks: The Infrastructure Revolution',
      content: 'Exploring how 5G technology is transforming connectivity and enabling new possibilities...',
      excerpt: 'Exploring how 5G technology is transforming connectivity and enabling new possibilities for IoT and smart cities.',
      image: 'https://images.unsplash.com/photo-1758784211688-ab9177d65bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYWRnZXRzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk1NzM4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Elena Rodriguez',
      date: '2025-01-13',
      readTime: '4 min read',
      views: '6.7K',
      category: 'Networks',
      status: 'published',
      tags: ['5G', 'Networks', 'IoT', 'Smart Cities']
    }
  ]);

  const handleNavigate = (page: string, data?: string) => {
    if (page === 'post' && data) {
      setSelectedPostId(data);
      setCurrentPage('post');
    } else {
      setCurrentPage(page);
      setSelectedPostId(null);
    }
  };

  const handleCreatePost = (postData: Omit<Post, 'id' | 'views'>) => {
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      views: '0'
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const handleUpdatePost = (postId: string, postData: Partial<Post>) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, ...postData } : post
    ));
  };

  const handleDeletePost = (postId: string) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'post':
        const selectedPost = posts.find(post => post.id === selectedPostId);
        return (
          <BlogPost 
            post={selectedPost || posts[0]}
            onNavigate={handleNavigate} 
          />
        );
      case 'admin':
        return (
          <AdminDashboard 
            onNavigate={handleNavigate}
            posts={posts}
            onCreatePost={handleCreatePost}
            onUpdatePost={handleUpdatePost}
            onDeletePost={handleDeletePost}
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <FeaturedPost onNavigate={handleNavigate} posts={posts} />
            <Categories onNavigate={handleNavigate} />
            <LatestPosts onNavigate={handleNavigate} posts={posts} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {currentPage !== 'admin' && currentPage !== 'post' && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      {currentPage !== 'admin' && currentPage !== 'post' && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}