export default async ({ app, redirect }) => {
  if (!app.$cookies.get('vsf-kibo-ticket')?.userId) {
    return redirect('/');
  }
};
