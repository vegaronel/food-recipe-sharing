import Logout from '@/components/logout';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRecipePosts } from '@/hooks/useRecipePosts';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import supabase from '@/helper/supabaseClient';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
function Dashboard() {
  const [formData, setFormData] = useState({
    user_id: '',
    title: '',
    content: '',
    image_url: null,
    tags: '',
  });
  async function getUser() {
    const user = await supabase.auth.getUser();
    if (!user) {
      console.log('User not Login');
    }

    return user;
  }
  const fileInputRef = useRef(null);
  useEffect(() => {
    const userId = async () => {
      const user = await getUser();
      setFormData({ ...formData, user_id: user.data.user.id });
    };
    userId();
  }, []);

  async function insertPost(event) {
    event.preventDefault();
    const { data, error } = await supabase.from('posts').insert([
      {
        user_id: formData.user_id,
        title: formData.title,
        content: formData.content,
        image_url: formData.image_url,
        tags: formData.tags,
      },
    ]);

    if (error) {
      console.log(error);

      console.log('Error inserting post');
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    setFormData({
      user_id: '',
      title: '',
      content: '',
      image_url: null,
      tags: '',
    });

    return data;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <form onSubmit={insertPost} method="post" className="bg-gray-400 ">
          <Input onChange={handleChange} value={formData.title} type="text" name="title" />
          <Input onChange={handleChange} value={formData.content} type="text" name="content" />
          <Input  ref={fileInputRef} onChange={handleChange} value={formData.file} type="file" name="image_url" />
          <Input onChange={handleChange} value={formData.tags} type="text" name="tags" />

          <Button>Upload</Button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
