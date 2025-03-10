import Logout from '@/components/logout';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRecipePosts } from '@/hooks/useRecipePosts';
import React from 'react';

function Dashboard() {
  const { landingPagePost } = useRecipePosts();

  console.log(landingPagePost);
  return (
    <div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <h1>Hello</h1>
      <Logout />
      </div>
    </div>
  );
}

export default Dashboard;
