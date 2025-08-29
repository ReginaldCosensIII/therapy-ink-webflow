import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, Play, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";

// Mock data for social media content
const mockTikTokVideos = [
  {
    id: 1,
    title: "Traditional Dragon Sleeve Process",
    views: "125K",
    likes: "8.2K",
    comments: "234",
    thumbnail: "/api/placeholder/300/400",
    hashtags: ["#tattoo", "#dragon", "#traditionalart", "#tattootherapy"]
  },
  {
    id: 2,
    title: "Client Reaction to Rose Tattoo",
    views: "89K",
    likes: "6.1K",
    comments: "189",
    thumbnail: "/api/placeholder/300/400",
    hashtags: ["#clientreaction", "#rosetattoo", "#happiness", "#tattootherapy"]
  },
  {
    id: 3,
    title: "Behind the Scenes: Studio Setup",
    views: "203K",
    likes: "12.5K",
    comments: "467",
    thumbnail: "/api/placeholder/300/400",
    hashtags: ["#behindthescenes", "#tattoostudio", "#setup", "#tattootherapy"]
  }
];

const mockInstagramPosts = [
  {
    id: 1,
    caption: "Fresh geometric piece completed today! ✨ #geometrictattoo #tattootherapy",
    likes: 1243,
    comments: 87,
    image: "/api/placeholder/400/400",
    date: "2 days ago"
  },
  {
    id: 2,
    caption: "Client's first tattoo - a meaningful quote about strength 💪",
    likes: 2156,
    comments: 156,
    image: "/api/placeholder/400/400",
    date: "4 days ago"
  },
  {
    id: 3,
    caption: "Color work in progress... Can't wait to show the final result! 🎨",
    likes: 987,
    comments: 43,
    image: "/api/placeholder/400/400",
    date: "1 week ago"
  }
];

const mockTestimonials = [
  {
    id: 1,
    client: "@sarah_ink_lover",
    platform: "instagram",
    text: "Amazing experience @tattootherapy! The artist was so patient and the result is absolutely perfect. Already planning my next piece! 🔥",
    image: "/api/placeholder/100/100",
    tattooImage: "/api/placeholder/300/300",
    hashtags: ["#tattootherapy", "#perfecttattoo", "#amazing"]
  },
  {
    id: 2,
    client: "Mike Thompson",
    platform: "facebook",
    text: "Tattoo Therapy exceeded all my expectations. Professional, clean, and the artwork is incredible. Highly recommend!",
    image: "/api/placeholder/100/100",
    tattooImage: "/api/placeholder/300/300",
    rating: 5
  },
  {
    id: 3,
    client: "@ink_enthusiast_22",
    platform: "twitter",
    text: "Just got my sleeve finished at @tattootherapy and I'm speechless! The attention to detail is unmatched. #BestTattooShop",
    image: "/api/placeholder/100/100",
    tattooImage: "/api/placeholder/300/300",
    hashtags: ["#BestTattooShop", "#tattootherapy", "#sleevetattoo"]
  }
];

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Social Media Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Follow our journey, see our latest work, and join our community of tattoo enthusiasts
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <Instagram className="w-4 h-4" />
              @tattoo.therapy
              <ExternalLink className="w-3 h-3" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
              TikTok
              <ExternalLink className="w-3 h-3" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Facebook className="w-4 h-4" />
              Tattoo Therapy
              <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="testimonials">Reviews</TabsTrigger>
          </TabsList>

          {/* All Content */}
          <TabsContent value="all" className="space-y-12">
            {/* Featured TikTok Videos */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-center">Latest TikTok Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockTikTokVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[3/4] bg-gradient-dark">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {video.views} views
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {video.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {video.comments}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {video.hashtags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Instagram Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-center">Instagram Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockInstagramPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-dark"></div>
                    <CardContent className="p-4">
                      <p className="text-sm mb-3">{post.caption}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Client Testimonials from Social Media */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-center">Client Love</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockTestimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-dark"></div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.client}</p>
                          <div className="flex items-center gap-1">
                            {testimonial.platform === 'instagram' && <Instagram className="w-4 h-4 text-pink-500" />}
                            {testimonial.platform === 'facebook' && <Facebook className="w-4 h-4 text-blue-500" />}
                            {testimonial.platform === 'twitter' && <Twitter className="w-4 h-4 text-blue-400" />}
                            <span className="text-xs text-muted-foreground capitalize">{testimonial.platform}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{testimonial.text}</p>
                      {testimonial.hashtags && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {testimonial.hashtags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {testimonial.rating && (
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Individual Tab Contents */}
          <TabsContent value="tiktok">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTikTokVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[3/4] bg-gradient-dark">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        {video.views} views
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {video.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {video.comments}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {video.hashtags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instagram">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockInstagramPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-dark"></div>
                  <CardContent className="p-4">
                    <p className="text-sm mb-3">{post.caption}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-dark"></div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.client}</p>
                        <div className="flex items-center gap-1">
                          {testimonial.platform === 'instagram' && <Instagram className="w-4 h-4 text-pink-500" />}
                          {testimonial.platform === 'facebook' && <Facebook className="w-4 h-4 text-blue-500" />}
                          {testimonial.platform === 'twitter' && <Twitter className="w-4 h-4 text-blue-400" />}
                          <span className="text-xs text-muted-foreground capitalize">{testimonial.platform}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{testimonial.text}</p>
                    {testimonial.hashtags && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {testimonial.hashtags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {testimonial.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-dark text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="mb-6 text-gray-300">
                Follow us on social media for daily inspiration, behind-the-scenes content, 
                and to stay updated with our latest work!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" className="gap-2">
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </Button>
                <Button variant="outline" className="gap-2 bg-white/10 border-white/20 hover:bg-white/20">
                  <MessageCircle className="w-4 h-4" />
                  Share Your Experience
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;