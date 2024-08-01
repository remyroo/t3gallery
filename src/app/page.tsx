import { db } from "~/server/db";
export const dynamic = "force-dynamic"; // this stops Next's aggressive caching and forces the page to be re-generated when db changes.

const mockUrls = [
  "https://utfs.io/f/ed055d37-0b1a-4e9a-b7ff-a577640bee24-lvb4e2.jpg",
  "https://utfs.io/f/0ef93fc3-a850-479c-bb37-9c7d1fef0096-2zhysg.jpg",
  "https://utfs.io/f/2f25c313-434e-492e-b4d9-62ac8bb12c23-28tvkz.jpg",
  "https://utfs.io/f/a2e20697-2f96-4345-86f4-9ba5dda33258-t9n27k.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
