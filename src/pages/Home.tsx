import Stories from '@/components/Feed/Stories';
import PostCard from '@/components/Post/PostCard';
import SuggestedUsers from '@/components/Feed/SuggestedUsers';

const Home = () => {
  // Mock data - in real app, this would come from API
  const stories = [
    { id: '1', user: { username: 'john_doe', avatar: '/api/placeholder/64/64' }, viewed: false },
    { id: '2', user: { username: 'jane_smith', avatar: '/api/placeholder/64/64' }, viewed: true },
    { id: '3', user: { username: 'mike_wilson', avatar: '/api/placeholder/64/64' }, viewed: false },
    { id: '4', user: { username: 'sarah_jones', avatar: '/api/placeholder/64/64' }, viewed: false },
    { id: '5', user: { username: 'alex_brown', avatar: '/api/placeholder/64/64' }, viewed: true },
  ];

  const posts = [
    {
      id: '1',
      user: {
        username: 'travel_guru',
        fullName: 'Travel Guru',
        avatar: '/api/placeholder/40/40'
      },
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop',
      caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #travel',
      likes: 245,
      comments: 18,
      timeAgo: '2h',
      liked: false,
      bookmarked: false
    },
    {
      id: '2',
      user: {
        username: 'foodie_life',
        fullName: 'Food Explorer',
        avatar: '/api/placeholder/40/40'
      },
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=500&fit=crop',
      caption: 'Homemade pasta night! Nothing beats fresh ingredients 🍝 #cooking #pasta #homemade',
      likes: 142,
      comments: 23,
      timeAgo: '4h',
      liked: true,
      bookmarked: true
    },
    {
      id: '3',
      user: {
        username: 'tech_enthusiast',
        fullName: 'Tech World',
        avatar: '/api/placeholder/40/40'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop',
      caption: 'Late night coding session with my favorite setup 💻 #coding #tech #programming',
      likes: 89,
      comments: 12,
      timeAgo: '6h',
      liked: false,
      bookmarked: false
    }
  ];

  const suggestedUsers = [
    {
      id: '1',
      username: 'design_master',
      fullName: 'Design Master',
      avatar: '/api/placeholder/40/40',
      mutualFollowers: 12
    },
    {
      id: '2',
      username: 'photo_artist',
      fullName: 'Photo Artist',
      avatar: '/api/placeholder/40/40',
      mutualFollowers: 8
    },
    {
      id: '3',
      username: 'music_lover',
      fullName: 'Music Lover',
      avatar: '/api/placeholder/40/40',
      mutualFollowers: 15
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stories Section */}
      <Stories stories={stories} />
      
      <div className="px-4">
        {/* Suggested Users */}
        <SuggestedUsers users={suggestedUsers} />
        
        {/* Posts Feed */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;