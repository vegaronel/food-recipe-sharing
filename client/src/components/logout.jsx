import React from 'react';
import { Button } from './ui/button';
import supabase from '@/helper/supabaseClient';
import { useNavigate } from 'react-router';
function Logout() {
    const navigate = useNavigate();
    
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if(error) throw error
    navigate("/login")
  }
  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
