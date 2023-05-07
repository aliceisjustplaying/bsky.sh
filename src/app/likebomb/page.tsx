export const metadata = {
  title: 'Bluesky Like Bomb',
  description: 'A way to like all posts in a thread easily.',
};

export default function Page() {
  return (
    <>
      <div>
        Drag this to your bookmarks bar. Clicking it will like every visible post in the thread.{' '}
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<a href="javascript:void%20function()%7Bconst%20a=document.querySelectorAll(%22div%5Baria-label=%5C%22Like%5C%22%5D%22),b=%5B...a%5D.filter(a=%3E!!a.offsetParent);b.forEach(a=%3Ea.click())%7D();">bsky like bomb</a>',
          }}
        ></div>
      </div>
    </>
  );
}
