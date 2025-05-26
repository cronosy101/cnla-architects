'use server';

import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';

export async function addProject(formData) {
  const adres = formData.get('adres');
  const zip = formData.get('zip');
  const type = formData.get('type');
  const date = formData.get('date');
  const text1 = formData.get('text1');
  const text2 = formData.get('text2');

  const { data, error } = await supabase
    .from('cnla_projects')
    .insert([{ adres, zip, type, date, text1, text2 }]);
  if (error) {
    console.log(error);
    throw new Error('failed to add project');
  }
  revalidatePath('/admin');
}

export async function getAllProjects() {
  const { data, error } = await supabase.from('cnla_projects').select('*');

  if (error) {
    console.log('error getting all project from database', error);
    return [];
  }
  return data;
}

export async function getProject(id) {
  const { data, error } = await supabase
    .from('cnla_projects')
    .select('*')
    .eq('id', id)
    .single();

  return data;
}

export async function deleteProject(id) {
  const { error } = await supabase.from('cnla_projects').delete().eq('id', id);

  if (error) {
    console.log('failed to delete project', error);
  }
  revalidatePath('/admin');
}

export async function getUser(email) {
  const { data, error } = await supabase
    .from('cnla_users')
    .select('*')
    .eq('email', email)
    .single();

  return data;
}
