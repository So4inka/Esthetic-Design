# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Room.destroy_all
Item.destroy_all
User.destroy_all

@admin = User.create!(username: 'Admin', email: 'Admin@email.com', password: '205055')

puts "#{User.count} users created"

# Rooms

Room.create(name: 'Living Room', user: @admin)
Room.create(name: 'Bathroom', user: @admin)
Room.create(name: 'Lounge Room', user: @admin)
Room.create(name: 'Bedroom', user: @admin)
Room.create(name: 'Backyard', user: @admin)

@rooms = Room.all

puts "#{Room.count} rooms created"

# Items

item_list = [
{
  name: 'Amethyst Sculptures', 
         description: 'Known throughout the ages as a signifier of creativity and passion, these Amethyst Sculptures are the perfect pieces to prominently display in your room to let others know just how much flair you have to show.', 
         img_url: 'https://i.imgur.com/5MocWsR.png', 
         style: 'Decorative Accents & Sculptures',
},
{
  name: 'Angular Wood Lanterns', 
  description: 'Handcrafted, warm rustic design will fit almost to any style. SIZE: 9.75"h', 
  img_url: 'https://i.imgur.com/iNPmOJd.png', 
  style: 'Lanterns & Candelholders',
},
{
  name: 'Vase',
  description: 'Light grey clay vase. Will fit any decor with its simple, yet contemporary design.',
  img_url: 'https://i.imgur.com/o0uRIkl.jpg',
  style: 'Decorative Accents & Sculptures',
},
{
  name: 'Fornasetti Scented Candle', 
  description: 'Ceramic container featuring hand-painted art. Filling is vegetable wax candle. Scent is a blend of Mediterranean herbs, wood tones, and incense. Delicate art piece as well as essence.',
  img_url: 'https://i.imgur.com/yVsIrkd.png', 
  style: 'Scented & Unscented Candles',
}, 
{
  name: 'Simple Mango Wood Lanterns',
  description: 'Minimalist design fits any home styling. Mango wood adds rustic touch to surfaces. ',
  img_url: 'https://i.imgur.com/ib1CBb0.png', 
  style: 'Lanterns & Candelholders',
}, 
{
  name: 'Graphic Square Wood Wall Art - Whitewashed', 
  description: 'Inspired by geometric stone carvings, this grand Graphic Wood Wall Art adds pattern and texture to spaces in need of some drama.',
  img_url: 'https://i.imgur.com/sdYp5Ep.png',
  style: 'Wall Art',
}, 
{
  name: 'Wooden Chain Link Sculpture', 
  description: 'Handcrafted design makes for a genuine accent. Wood accents will bring warmth and cozyness to your home.', 
  img_url: 'https://i.imgur.com/K9s8xdz.png', 
  style: 'Decorative Accents & Sculptures',
},
{
  name: 'Marble & Wood Geometric Objects', 
  description: 'Marble & Wood Geometric Objects demonstrate the complexity of a shape & material. Will add statement accent to your modern style in your home or office.', 
  img_url: 'https://i.imgur.com/gjjOjIn.png', 
  style: 'Decorative Accents & Sculptures',
}, 
{
  name: 'Metal Geometric Decorative Objects', 
  description: 'These optical sculptures feature geometric twists and turns, for a multidimensional display. Will add modern look to your home or office.',
  img_url: 'https://i.imgur.com/sl87Q2o.png',
  style: 'Decorative Accents & Sculptures',
}, 
{
  name: 'Aluminum Wall Jewelry Branch',
  description: 'Not only beautiful home decor your bedroom but also usefull tool for desplaying your jewelry.',
  img_url: 'https://i.imgur.com/Aeov1F6.png',
  style: 'Jewelry Boxes & Stands',
},
{
  name: 'Mid-Century Wood Lanterns', 
  description: 'Glass vessels are held inside mango wood stands in a Café finish. Use with battery-operated flameless candles only. Will be a great addition to any style indoors or outdoors.', 
  img_url: 'https://i.imgur.com/QQussgC.png', 
  style: 'Lanterns & Candelholders',
}, 
{
  name: 'Original Artwork',
  description: 'Wall Art by Michael Schauer', 
  img_url: 'https://i.imgur.com/1Od29Qo.png', 
  style: 'Pictures & Frames',
},
{
  name: 'Wood & Rope Lanterns - Natural',
  description: 'Rustic styled lanterns will provide lovely lighting for the mantlepiece, dining table or outdoor patio.',
  img_url: 'https://i.imgur.com/tOfLVyA.png', 
  style: 'Lanterns & Candelholders',
},
{
  name: 'Pierced Constellation Vase/Candeleholder', 
  description: 'Soft glow that is reminiscent of the night sky when lit from within.Will add cozy and comforting style to your home.', 
  img_url: 'https://i.imgur.com/YsZrtIl.png', 
  style: 'Lanterns & Candelholders',
}, 
{
  name: 'Vintage Canvas Print Poster',
  description: 'Stylish design to satisfy your wall decoration ideas and impress family and friends',
  img_url: 'https://i.imgur.com/ue3Fk8Q.png', 
  style: 'Posters & Prints',
},
{
  name: 'Metal Love Sign',
  description: 'Spread a little love while adding style to your home with our solid metal love object.',
  img_url: 'https://i.imgur.com/0cpOkL4.png', 
  style: 'Decorative Accents & Sculptures',
}, 
{
  name: 'Canvas Print Wall Art', 
  description: 'Classic Poster Zodiac by Alphonse Mucha - 24x36 inches. Will add feminine touch to any style.', 
  img_url: 'https://i.imgur.com/iOQc6r3.png', 
  style: 'Posters & Prints',
}, 
{
  name: 'Framed Landscape Set', 
  description: 'Classic Black Gallery Wall Frame Set with Decorative Landscape Art Print Picture Frame Collage Set Wall Art Decor for Home Decoration.', 
  img_url: 'https://i.imgur.com/VViv7JK.jpg', 
  style: 'Pictures & Frames',
}, 
{
  name: 'BACCARAT Be@rbrick Figurine', 
  description: 'The iconic Be@rbrick wil bring in the luxury world with this ultra-elegant version in black crystal.', 
  img_url: 'https://i.imgur.com/sSQSJyc.png', 
  style: 'Decorative Accents & Sculptures',
}, 
{
  name: 'Gold Starburst Mirrors', 
  description: 'Painted wooden frames with mirror glass. These types of wall art will fit to many decor styles & dress up the wall space.', 
  img_url: 'https://i.imgur.com/Y2KHFXM.png', 
  style: 'Wall Art & Mirrors',
}, 
{
  name: 'Solid White Indoor/Outdoor Planters', 
  description: 'Suitable for indoor or outdoor use. Simple, modern design.', 
  img_url: 'https://i.imgur.com/IfirD4e.png', 
  style: 'Indoor & Outdoor Planters',
},
{
  name: 'Colored Glass Vases', 
  description: 'Authentic, eco-friendly decorative piece of decor. Whether displaying botanicals or fruits.', 
  img_url: 'https://i.imgur.com/3y1ffi3.png', 
  style: 'Vases',
}, 
]

puts "#{Item.count} items created!"

# @rooms.fifth.items = [item_list.third]