import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const portfolioImages = {
  all: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTA1MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "weddings",
      title: "Wedding Photography",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1654738344031-441757e8818d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEwNzY0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "landscapes",
      title: "Landscape Photography",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1713783770546-87b61c241f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MTEyOTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "architecture",
      title: "Architecture Photography",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzYxMDMwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portraits",
      title: "Fashion Photography",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1661787726842-9f1e47734aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzYxMDgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "street",
      title: "Street Photography",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTEyOTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portraits",
      title: "Portrait Photography",
    },
  ],
};

export function Portfolio() {
  const getFilteredImages = (category: string) => {
    if (category === "all") return portfolioImages.all;
    return portfolioImages.all.filter((img) => img.category === category);
  };

  const ImageGrid = ({ images }: { images: typeof portfolioImages.all }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        >
          <ImageWithFallback
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white tracking-wider">{image.title}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 tracking-wider">PORTFOLIO</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Explore a curated selection of my work across different photography styles and genres.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-center mb-12 flex-wrap h-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="weddings">Weddings</TabsTrigger>
            <TabsTrigger value="portraits">Pre-Wedding</TabsTrigger>
            <TabsTrigger value="landscapes">Celebrity Shoots</TabsTrigger>
            <TabsTrigger value="architecture">Bridal Shoot</TabsTrigger>
            {/* <TabsTrigger value="street">Street</TabsTrigger> */}
          </TabsList>

          <TabsContent value="all">
            <ImageGrid images={getFilteredImages("all")} />
          </TabsContent>
          <TabsContent value="weddings">
            <ImageGrid images={getFilteredImages("weddings")} />
          </TabsContent>
          <TabsContent value="portraits">
            <ImageGrid images={getFilteredImages("Pre-Wedding")} />
          </TabsContent>
          <TabsContent value="landscapes">
            <ImageGrid images={getFilteredImages("Celebrity Shoot")} />
          </TabsContent>
          <TabsContent value="architecture">
            <ImageGrid images={getFilteredImages("Bridal Shoots")} />
          </TabsContent>
          {/* <TabsContent value="street">
            <ImageGrid images={getFilteredImages("street")} />
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
}
