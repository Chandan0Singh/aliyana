const bagsData = [
  {
    id: 'kids-pink',
    name: 'Kids Pink Mini Bag',
    image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/sling-bag/f/n/v/-original-imagz49ehhb5azrp.jpeg?q=20&crop=false',
    price: 999,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'kids-blue',
    name: 'Kids Blue Cartoon Bag',
    image: 'https://m.media-amazon.com/images/I/71akHUAdSEL._AC_UY1100_.jpg',
    price: 899,
    gender: 'male',
    age: 'child',
    tags: ['trending', 'classic'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-black',
    name: 'Teen Boy Black Sling',
    image: 'https://m.media-amazon.com/images/I/61UBT3Gn+oL._SX679_.jpg',
    price: 1299,
    gender: 'male',
    age: 'teen',
    tags: ['trending', 'popular'],
    sale: '[20%]'
  },
  {
    id: 'teen-girl-floral',
    name: 'Teen Girl Floral Backpack',
    image: 'https://m.media-amazon.com/images/I/81z5vl5YrDL._AC_UY1100_.jpg',
    price: 1399,
    gender: 'female',
    age: 'teen',
    tags: ['popular', 'premium'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-tote',
    name: 'Adult Woman Tote',
    image: 'https://m.media-amazon.com/images/I/61x5q+zB0qL._AC_UY1100_.jpg',
    price: 2499,
    gender: 'female',
    age: 'adult',
    tags: ['trending']
  },
  {
    id: 'adult-man-laptop',
    name: 'Adult Man Laptop Bag',
    image: 'https://m.media-amazon.com/images/I/91ogt8ED2EL._AC_UY1100_.jpg',
    price: 2799,
    gender: 'male',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-leather',
    name: 'Elder Man Leather Bag',
    image: 'https://s.alicdn.com/@sc04/kf/Hc944b3a6d9b244ae964e5eb829394b10X.png_300x300.jpg',
    price: 3499,
    gender: 'male',
    age: 'elder',
    tags: []
  },
  {
    id: 'elder-woman-handbag',
    name: 'Elder Woman Classic Handbag',
    image: 'https://m.media-amazon.com/images/I/71jQgFDHfdL._AC_UY1100_.jpg',
    price: 1999,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'unisex-duffel-gym',
    name: 'Unisex Duffel Gym Bag',
    image: 'https://m.media-amazon.com/images/I/71LGukjcZeL._AC_UY1100_.jpg',
    price: 1599,
    gender: 'unisex',
    age: 'adult',
    tags: ['trending', 'popular'],
    sale: '[20%]'
  },
  {
    id: 'kids-unicorn',
    name: 'Kids Unicorn Backpack',
    image: 'https://m.media-amazon.com/images/I/61vPyGqS0uL._AC_UY1100_.jpg',
    price: 999,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'travel-backpack-men',
    name: 'Men’s Travel Backpack',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY1100_.jpg',
    price: 2199,
    gender: 'male',
    age: 'adult',
    tags: ['trending'],
    sale: '[10%]'
  },
  {
    id: 'luxury-leather-women',
    name: 'Luxury Leather Tote - Women',
    image: 'https://m.media-amazon.com/images/I/61JDYw+5P6L._AC_UY1100_.jpg',
    price: 4599,
    gender: 'female',
    age: 'adult',
    tags: ['limited', 'new']
  },
  {
    id: 'college-bag-unisex',
    name: 'College Backpack - Unisex',
    image: 'https://m.media-amazon.com/images/I/71tFOp+E8qL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'unisex',
    age: 'teen',
    tags: ['popular'],
    sale: '[25%]'
  },
  {
    id: 'office-bag-laptop',
    name: 'Formal Laptop Office Bag',
    image: 'https://m.media-amazon.com/images/I/71yE+nDnUnL._AC_UY1100_.jpg',
    price: 1999,
    gender: 'unisex',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'fashion-bag-glitter',
    name: 'Glitter Party Clutch',
    image: 'https://m.media-amazon.com/images/I/71GknhNhgCL._AC_UY1100_.jpg',
    price: 899,
    gender: 'female',
    age: 'adult',
    tags: ['trending', 'popular'],
    sale: '[20%]'
  },
  {
    id: 'kids-dino-bag',
    name: 'Kids Dino Fun Bag',
    image: 'https://m.media-amazon.com/images/I/718dA6eDoWL._AC_UY1100_.jpg',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'woman-sling-bag-red',
    name: 'Red Sling Bag for Women',
    image: 'https://m.media-amazon.com/images/I/61mPrCYoR7L._AC_UY1100_.jpg',
    price: 1199,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'man-messenger-bag',
    name: 'Mens Brown Messenger Bag',
    image: 'https://m.media-amazon.com/images/I/61+Z5b8kYrL._AC_UY1100_.jpg',
    price: 1899,
    gender: 'male',
    age: 'adult',
    tags: ['trending']
  },
  {
    id: 'kids-space-backpack',
    name: 'Kids Space Adventure Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 950,
    gender: 'male',
    age: 'child',
    tags: ['popular', 'new'],
    sale: '[15%]'
  },
  {
    id: 'teen-girl-pink-sling',
    name: 'Teen Girl Pink Sling Bag',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1299,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'adult-man-duffel',
    name: 'Adult Man Sports Duffel',
    image: 'https://m.media-amazon.com/images/I/71kLmNp2ZqL._AC_UY1100_.jpg',
    price: 1799,
    gender: 'male',
    age: 'adult',
    tags: ['popular']
  },
  {
    id: 'elder-woman-floral',
    name: 'Elder Woman Floral Handbag',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2299,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-superhero-bag',
    name: 'Kids Superhero Backpack',
    image: 'https://m.media-amazon.com/images/I/61zXy7qP9uL._AC_UY1100_.jpg',
    price: 899,
    gender: 'male',
    age: 'child',
    tags: ['trending'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-blue',
    name: 'Teen Boy Blue Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1499,
    gender: 'male',
    age: 'teen',
    tags: ['popular', 'new'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-clutch',
    name: 'Adult Woman Evening Clutch',
    image: 'https://m.media-amazon.com/images/I/61vRt6qY8xL._AC_UY1100_.jpg',
    price: 999,
    gender: 'female',
    age: 'adult',
    tags: ['trending'],
    sale: '[25%]'
  },
  {
    id: 'unisex-travel-duffel',
    name: 'Unisex Travel Duffel Bag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'unisex',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-briefcase',
    name: 'Elder Man Classic Briefcase',
    image: 'https://m.media-amazon.com/images/I/61xUz8qZ0vL._AC_UY1100_.jpg',
    price: 3999,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-princess-bag',
    name: 'Kids Princess Sparkle Bag',
    image: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 799,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-casual',
    name: 'Unisex Teen Casual Backpack',
    image: 'https://m.media-amazon.com/images/I/61yVz0qA2wL._AC_UY1100_.jpg',
    price: 1199,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-backpack',
    name: 'Adult Woman Stylish Backpack',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2399,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'kids-animal-bag',
    name: 'Kids Animal Print Bag',
    image: 'https://m.media-amazon.com/images/I/61tUz7qC4vL._AC_UY1100_.jpg',
    price: 850,
    gender: 'unisex',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-tote',
    name: 'Teen Girl Trendy Tote',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'female',
    age: 'teen',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'adult-man-sling',
    name: 'Adult Man Urban Sling',
    image: 'https://m.media-amazon.com/images/I/61xXy9qE6yL._AC_UY1100_.jpg',
    price: 1699,
    gender: 'male',
    age: 'adult',
    tags: ['trending']
  },
  {
    id: 'elder-woman-tote',
    name: 'Elder Woman Elegant Tote',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2599,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-robot-bag',
    name: 'Kids Robot Adventure Bag',
    image: 'https://m.media-amazon.com/images/I/61zVz1qG8uL._AC_UY1100_.jpg',
    price: 899,
    gender: 'male',
    age: 'child',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'teen-boy-sports',
    name: 'Teen Boy Sports Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1599,
    gender: 'male',
    age: 'teen',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'adult-woman-satchel',
    name: 'Adult Woman Satchel Bag',
    image: 'https://m.media-amazon.com/images/I/61tXy3qJ0wL._AC_UY1100_.jpg',
    price: 2799,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'unisex-laptop-backpack',
    name: 'Unisex Laptop Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'unisex',
    age: 'adult',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'elder-man-sling',
    name: 'Elder Man Compact Sling',
    image: 'https://m.media-amazon.com/images/I/61xWz5qM2yL._AC_UY1100_.jpg',
    price: 1999,
    gender: 'male',
    age: 'elder',
    tags: []
  },
  {
    id: 'kids-fairy-bag',
    name: 'Kids Fairy Magic Bag',
    image: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 799,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-glitter',
    name: 'Teen Girl Glitter Sling',
    image: 'https://m.media-amazon.com/images/I/61tUz8qP4vL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'adult-man-backpack',
    name: 'Adult Man Tactical Backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2299,
    gender: 'male',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-woman-clutch',
    name: 'Elder Woman Velvet Clutch',
    image: 'https://m.media-amazon.com/images/I/61vWz0qT6yL._AC_UY1100_.jpg',
    price: 1799,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-car-bag',
    name: 'Kids Racing Car Bag',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-sling',
    name: 'Unisex Teen Urban Sling',
    image: 'https://m.media-amazon.com/images/I/61xXy0qW9vL._AC_UY1100_.jpg',
    price: 1299,
    gender: 'unisex',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-hobo',
    name: 'Adult Woman Hobo Bag',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2699,
    gender: 'female',
    age: 'adult',
    tags: ['trending']
  },
  {
    id: 'elder-man-messenger',
    name: 'Elder Man Messenger Bag',
    image: 'https://m.media-amazon.com/images/I/61yWz4qZ1xL._AC_UY1100_.jpg',
    price: 2999,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-mermaid-bag',
    name: 'Kids Mermaid Sparkle Bag',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 899,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-laptop',
    name: 'Teen Boy Laptop Backpack',
    image: 'https://m.media-amazon.com/images/I/61vUz5qC3zL._AC_UY1100_.jpg',
    price: 1699,
    gender: 'male',
    age: 'teen',
    tags: ['new'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-mini',
    name: 'Adult Woman Mini Crossbody',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1499,
    gender: 'female',
    age: 'adult',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'unisex-gym-backpack',
    name: 'Unisex Gym Backpack',
    image: 'https://m.media-amazon.com/images/I/61xWz6qI5xL._AC_UY1100_.jpg',
    price: 1799,
    gender: 'unisex',
    age: 'adult',
    tags: ['popular']
  },
  {
    id: 'elder-woman-sling',
    name: 'Elder Woman Sling Bag',
    image: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1899,
    gender: 'female',
    age: 'elder',
    tags: []
  },
  {
    id: 'kids-rocket-bag',
    name: 'Kids Rocket Ship Bag',
    image: 'https://m.media-amazon.com/images/I/61tUz9qM7vL._AC_UY1100_.jpg',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['trending'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-backpack',
    name: 'Teen Girl Stylish Backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1399,
    gender: 'female',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-briefcase',
    name: 'Adult Man Formal Briefcase',
    image: 'https://m.media-amazon.com/images/I/61vWz1qR9xL._AC_UY1100_.jpg',
    price: 3499,
    gender: 'male',
    age: 'adult',
    tags: ['limited']
  },
  {
    id: 'elder-woman-backpack',
    name: 'Elder Woman Lightweight Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2199,
    gender: 'female',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-butterfly-bag',
    name: 'Kids Butterfly Print Bag',
    image: 'https://m.media-amazon.com/images/I/61xXy4qV1zL._AC_UY1100_.jpg',
    price: 849,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-duffel',
    name: 'Unisex Teen Duffel Bag',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1499,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'adult-woman-leather',
    name: 'Adult Woman Leather Satchel',
    image: 'https://m.media-amazon.com/images/I/61yWz8qA3vL._AC_UY1100_.jpg',
    price: 3999,
    gender: 'female',
    age: 'adult',
    tags: ['limited'],
    sale: '[17%]'
  },
  {
    id: 'elder-man-backpack',
    name: 'Elder Man Casual Backpack',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2499,
    gender: 'male',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-star-backpack',
    name: 'Kids Starry Night Backpack',
    image: 'https://www.freepik.com/free-photo/child-backpack_12345678.jpg#uuid=12345678-1234-5678-1234-567812345678',
    price: 899,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'teen-boy-grey-sling',
    name: 'Teen Boy Grey Sling Bag',
    image: 'https://m.media-amazon.com/images/I/71aBcXy5KjL._AC_UY1100_.jpg',
    price: 1199,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'adult-woman-quilted',
    name: 'Adult Woman Quilted Tote',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2899,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-duffel',
    name: 'Elder Man Travel Duffel',
    image: 'https://m.media-amazon.com/images/I/61bCdXy6LmL._AC_UY1100_.jpg',
    price: 2699,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-panda-bag',
    name: 'Kids Panda Print Bag',
    image: 'https://www.pexels.com/photo/adorable-panda-backpack-934071/',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-purple',
    name: 'Teen Girl Purple Backpack',
    image: 'https://m.media-amazon.com/images/I/71cDeYz7MnL._AC_UY1100_.jpg',
    price: 1499,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-casual',
    name: 'Adult Man Casual Messenger',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'male',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-mini',
    name: 'Elder Woman Mini Handbag',
    image: 'https://www.freepik.com/free-photo/elegant-handbag_12345679.jpg#uuid=12345679-1234-5678-1234-567812345679',
    price: 1799,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-truck-bag',
    name: 'Kids Monster Truck Bag',
    image: 'https://m.media-amazon.com/images/I/61dEfUz8NpL._AC_UY1100_.jpg',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-blue',
    name: 'Unisex Teen Blue Duffel',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1599,
    gender: 'unisex',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-velvet',
    name: 'Adult Woman Velvet Tote',
    image: 'https://m.media-amazon.com/images/I/71eFgVz9PqL._AC_UY1100_.jpg',
    price: 2599,
    gender: 'female',
    age: 'adult',
    tags: ['trending']
  },
  {
    id: 'elder-man-laptop',
    name: 'Elder Man Laptop Briefcase',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 3299,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-flower-bag',
    name: 'Kids Flower Power Bag',
    image: 'https://www.pexels.com/photo/floral-backpack-934072/',
    price: 799,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-green',
    name: 'Teen Boy Green Backpack',
    image: 'https://m.media-amazon.com/images/I/61fGhWz0RrL._AC_UY1100_.jpg',
    price: 1399,
    gender: 'male',
    age: 'teen',
    tags: ['new'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-crossbody',
    name: 'Adult Woman Crossbody Bag',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1699,
    gender: 'female',
    age: 'adult',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'unisex-adventure-bag',
    name: 'Unisex Adventure Backpack',
    image: 'https://m.media-amazon.com/images/I/71hIjXy1StL._AC_UY1100_.jpg',
    price: 2099,
    gender: 'unisex',
    age: 'adult',
    tags: ['popular']
  },
  {
    id: 'elder-woman-satchel',
    name: 'Elder Woman Satchel Bag',
    image: 'https://www.freepik.com/free-photo/satchel-bag_12345680.jpg#uuid=12345680-1234-5678-1234-567812345680',
    price: 2399,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-space-ship-bag',
    name: 'Kids Spaceship Backpack',
    image: 'https://m.media-amazon.com/images/I/61jKlYz2TuL._AC_UY1100_.jpg',
    price: 899,
    gender: 'male',
    age: 'child',
    tags: ['trending'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-velvet',
    name: 'Teen Girl Velvet Sling',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-travel',
    name: 'Adult Man Travel Sling',
    image: 'https://m.media-amazon.com/images/I/71kLmXy3UvL._AC_UY1100_.jpg',
    price: 1799,
    gender: 'male',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-tote',
    name: 'Elder Man Canvas Tote',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2599,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-rainbow-bag',
    name: 'Kids Rainbow Backpack',
    image: 'https://www.pexels.com/photo/rainbow-backpack-934073/',
    price: 849,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-laptop',
    name: 'Unisex Teen Laptop Bag',
    image: 'https://m.media-amazon.com/images/I/61mNpYz4VwL._AC_UY1100_.jpg',
    price: 1599,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-floral',
    name: 'Adult Woman Floral Tote',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2799,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-woman-crossbody',
    name: 'Elder Woman Crossbody Bag',
    image: 'https://m.media-amazon.com/images/I/71pQrYz5WxL._AC_UY1100_.jpg',
    price: 1999,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-dinosaur-bag',
    name: 'Kids Dinosaur Adventure Bag',
    image: 'https://www.freepik.com/free-photo/dinosaur-backpack_12345681.jpg#uuid=12345681-1234-5678-1234-567812345681',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-duffel',
    name: 'Teen Boy Sports Duffel',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1499,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-clutch-gold',
    name: 'Adult Woman Gold Clutch',
    image: 'https://m.media-amazon.com/images/I/61rStYz6XyL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'unisex-casual-backpack',
    name: 'Unisex Casual Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'unisex',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-travel',
    name: 'Elder Man Travel Backpack',
    image: 'https://m.media-amazon.com/images/I/71tUvYz7ZzL._AC_UY1100_.jpg',
    price: 2399,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-owl-bag',
    name: 'Kids Owl Print Bag',
    image: 'https://www.pexels.com/photo/owl-backpack-934074/',
    price: 849,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-blue-sling',
    name: 'Teen Girl Blue Sling Bag',
    image: 'https://m.media-amazon.com/images/I/61vWxYz8AaL._AC_UY1100_.jpg',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-work-bag',
    name: 'Adult Man Work Briefcase',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2999,
    gender: 'male',
    age: 'adult',
    tags: ['limited']
  },
  {
    id: 'elder-woman-velvet-tote',
    name: 'Elder Woman Velvet Tote',
    image: 'https://www.freepik.com/free-photo/velvet-tote_12345682.jpg#uuid=12345682-1234-5678-1234-567812345682',
    price: 2599,
    gender: 'female',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-pirate-bag',
    name: 'Kids Pirate Adventure Bag',
    image: 'https://m.media-amazon.com/images/I/71yXzYz9BbL._AC_UY1100_.jpg',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-grey',
    name: 'Unisex Teen Grey Backpack',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-mini-tote',
    name: 'Adult Woman Mini Tote',
    image: 'https://m.media-amazon.com/images/I/61zYyAz0CcL._AC_UY1100_.jpg',
    price: 1699,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-sling-grey',
    name: 'Elder Man Grey Sling',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-rocket-backpack',
    name: 'Kids Rocket Backpack',
    image: 'https://www.pexels.com/photo/rocket-backpack-934075/',
    price: 899,
    gender: 'unisex',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-black-backpack',
    name: 'Teen Boy Black Backpack',
    image: 'https://m.media-amazon.com/images/I/71aBcXy5KjL._AC_UY1100_.jpg',
    price: 1499,
    gender: 'male',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-eco-bag',
    name: 'Adult Woman Eco Canvas Bag',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'female',
    age: 'adult',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-floral-sling',
    name: 'Elder Woman Floral Sling',
    image: 'https://www.freepik.com/free-photo/floral-sling-bag_12345683.jpg#uuid=12345683-1234-5678-1234-567812345683',
    price: 1799,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-lion-bag',
    name: 'Kids Lion Print Bag',
    image: 'https://m.media-amazon.com/images/I/61cDeYz7MnL._AC_UY1100_.jpg',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-pink-backpack',
    name: 'Teen Girl Pink Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-eco-duffel',
    name: 'Adult Man Eco Duffel Bag',
    image: 'https://m.media-amazon.com/images/I/71eFgVz9PqL._AC_UY1100_.jpg',
    price: 2099,
    gender: 'male',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'unisex-travel-sling',
    name: 'Unisex Travel Sling Bag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1599,
    gender: 'unisex',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-briefcase-black',
    name: 'Elder Man Black Briefcase',
    image: 'https://www.freepik.com/free-photo/black-briefcase_12345684.jpg#uuid=12345684-1234-5678-1234-567812345684',
    price: 3499,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-unicorn-sling',
    name: 'Kids Unicorn Sling Bag',
    image: 'https://m.media-amazon.com/images/I/61fGhWz0RrL._AC_UY1100_.jpg',
    price: 849,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-green',
    name: 'Unisex Teen Green Sling',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1299,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-party-clutch',
    name: 'Adult Woman Party Clutch',
    image: 'https://m.media-amazon.com/images/I/71hIjXy1StL._AC_UY1100_.jpg',
    price: 999,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-canvas-tote',
    name: 'Elder Woman Canvas Tote',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2299,
    gender: 'female',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-space-alien-bag',
    name: 'Kids Space Alien Bag',
    image: 'https://www.pexels.com/photo/alien-backpack-934076/',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-blue-duffel',
    name: 'Teen Boy Blue Duffel Bag',
    image: 'https://m.media-amazon.com/images/I/61jKlYz2TuL._AC_UY1100_.jpg',
    price: 1599,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-canvas-backpack',
    name: 'Adult Man Canvas Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2199,
    gender: 'male',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-woman-mini-sling',
    name: 'Elder Woman Mini Sling',
    image: 'https://www.freepik.com/free-photo/mini-sling-bag_12345685.jpg#uuid=12345685-1234-5678-1234-567812345685',
    price: 1799,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-tiger-bag',
    name: 'Kids Tiger Print Bag',
    image: 'https://m.media-amazon.com/images/I/71kLmXy3UvL._AC_UY1100_.jpg',
    price: 849,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-floral-sling',
    name: 'Teen Girl Floral Sling Bag',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-luxury-tote',
    name: 'Adult Woman Luxury Tote',
    image: 'https://m.media-amazon.com/images/I/61mNpYz4VwL._AC_UY1100_.jpg',
    price: 3999,
    gender: 'female',
    age: 'adult',
    tags: ['limited'],
    sale: '[17%]'
  },
  {
    id: 'unisex-work-backpack',
    name: 'Unisex Work Backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'unisex',
    age: 'adult',
    tags: ['new'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-canvas-sling',
    name: 'Elder Man Canvas Sling',
    image: 'https://www.pexels.com/photo/canvas-sling-934077/',
    price: 1899,
    gender: 'male',
    age: 'elder',
    tags: ['popular']
  },
  {
    id: 'kids-galaxy-backpack',
    name: 'Kids Galaxy Print Backpack',
    image: 'https://www.freepik.com/free-photo/galaxy-backpack_12345686.jpg#uuid=12345686-1234-5678-1234-567812345686',
    price: 899,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-red-sling',
    name: 'Teen Boy Red Sling Bag',
    image: 'https://m.media-amazon.com/images/I/71aCdXy6LmL._AC_UY1100_.jpg',
    price: 1199,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-suede-tote',
    name: 'Adult Woman Suede Tote',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2999,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-leather-sling',
    name: 'Elder Man Leather Sling',
    image: 'https://m.media-amazon.com/images/I/61bEfYz7NpL._AC_UY1100_.jpg',
    price: 2699,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-bear-bag',
    name: 'Kids Bear Print Bag',
    image: 'https://www.pexels.com/photo/bear-backpack-934078/',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-yellow-backpack',
    name: 'Teen Girl Yellow Backpack',
    image: 'https://m.media-amazon.com/images/I/71cFgVz8PqL._AC_UY1100_.jpg',
    price: 1499,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-sport-backpack',
    name: 'Adult Man Sport Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'male',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-quilted-handbag',
    name: 'Elder Woman Quilted Handbag',
    image: 'https://www.freepik.com/free-photo/quilted-handbag_12345687.jpg#uuid=12345687-1234-5678-1234-567812345687',
    price: 2299,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-plane-bag',
    name: 'Kids Airplane Adventure Bag',
    image: 'https://m.media-amazon.com/images/I/61dGhUz9RrL._AC_UY1100_.jpg',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-red-duffel',
    name: 'Unisex Teen Red Duffel',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1599,
    gender: 'unisex',
    age: 'teen',
    tags: ['popular'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-sequin-clutch',
    name: 'Adult Woman Sequin Clutch',
    image: 'https://m.media-amazon.com/images/I/71eIjXy2StL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'female',
    age: 'adult',
    tags: ['trending'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-work-briefcase',
    name: 'Elder Man Work Briefcase',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 3499,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-zebra-bag',
    name: 'Kids Zebra Print Bag',
    image: 'https://www.pexels.com/photo/zebra-backpack-934079/',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-orange-backpack',
    name: 'Teen Boy Orange Backpack',
    image: 'https://m.media-amazon.com/images/I/61fJhWz1SrL._AC_UY1100_.jpg',
    price: 1399,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-canvas-tote',
    name: 'Adult Woman Canvas Tote',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-leather-handbag',
    name: 'Elder Woman Leather Handbag',
    image: 'https://www.freepik.com/free-photo/leather-handbag_12345688.jpg#uuid=12345688-1234-5678-1234-567812345688',
    price: 2799,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-robot-backpack',
    name: 'Kids Robot Print Backpack',
    image: 'https://m.media-amazon.com/images/I/71yYzXz0CcL._AC_UY1100_.jpg',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-green-sling',
    name: 'Teen Girl Green Sling Bag',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-leather-backpack',
    name: 'Adult Man Leather Backpack',
    image: 'https://m.media-amazon.com/images/I/61aCdXy6LmL._AC_UY1100_.jpg',
    price: 2999,
    gender: 'male',
    age: 'adult',
    tags: ['limited']
  },
  {
    id: 'elder-woman-mini-tote',
    name: 'Elder Woman Mini Tote',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'female',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-elephant-bag',
    name: 'Kids Elephant Print Bag',
    image: 'https://www.pexels.com/photo/elephant-backpack-934080/',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-orange-sling',
    name: 'Unisex Teen Orange Sling',
    image: 'https://m.media-amazon.com/images/I/71cFgVz8PqL._AC_UY1100_.jpg',
    price: 1299,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-patterned-tote',
    name: 'Adult Woman Patterned Tote',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2299,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-sport-duffel',
    name: 'Elder Man Sport Duffel',
    image: 'https://www.freepik.com/free-photo/sport-duffel_12345689.jpg#uuid=12345689-1234-5678-1234-567812345689',
    price: 2599,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-giraffe-bag',
    name: 'Kids Giraffe Print Bag',
    image: 'https://m.media-amazon.com/images/I/61dGhUz9RrL._AC_UY1100_.jpg',
    price: 849,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-green-duffel',
    name: 'Teen Boy Green Duffel Bag',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1599,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-silk-clutch',
    name: 'Adult Woman Silk Clutch',
    image: 'https://m.media-amazon.com/images/I/71eIjXy2StL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'unisex-urban-backpack',
    name: 'Unisex Urban Backpack',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'unisex',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-man-leather-briefcase',
    name: 'Elder Man Leather Briefcase',
    image: 'https://www.freepik.com/free-photo/leather-briefcase_12345690.jpg#uuid=12345690-1234-5678-1234-567812345690',
    price: 3499,
    gender: 'male',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-flamingo-bag',
    name: 'Kids Flamingo Print Bag',
    image: 'https://m.media-amazon.com/images/I/61fJhWz1SrL._AC_UY1100_.jpg',
    price: 799,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-red-sling',
    name: 'Teen Girl Red Sling Bag',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-travel-duffel',
    name: 'Adult Man Travel Duffel',
    image: 'https://m.media-amazon.com/images/I/71yYzXz0CcL._AC_UY1100_.jpg',
    price: 2299,
    gender: 'male',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-suede-handbag',
    name: 'Elder Woman Suede Handbag',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2699,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-astronaut-bag',
    name: 'Kids Astronaut Backpack',
    image: 'https://www.pexels.com/photo/astronaut-backpack-934081/',
    price: 849,
    gender: 'male',
    age: 'child',
    tags: ['new'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-yellow-sling',
    name: 'Unisex Teen Yellow Sling',
    image: 'https://m.media-amazon.com/images/I/61aCdXy6LmL._AC_UY1100_.jpg',
    price: 1299,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-eco-tote',
    name: 'Adult Woman Eco Tote',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-man-canvas-backpack',
    name: 'Elder Man Canvas Backpack',
    image: 'https://www.freepik.com/free-photo/canvas-backpack_12345691.jpg#uuid=12345691-1234-5678-1234-567812345691',
    price: 2399,
    gender: 'male',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-penguin-bag',
    name: 'Kids Penguin Print Bag',
    image: 'https://m.media-amazon.com/images/I/71cFgVz8PqL._AC_UY1100_.jpg',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-yellow-backpack',
    name: 'Teen Boy Yellow Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-leather-clutch',
    name: 'Adult Woman Leather Clutch',
    image: 'https://m.media-amazon.com/images/I/61eIjXy2StL._AC_UY1100_.jpg',
    price: 1099,
    gender: 'female',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'unisex-sport-backpack',
    name: 'Unisex Sport Backpack',
    image: 'https://images.unsplash.com/photo-1594224457816-29f4c435ef23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1999,
    gender: 'unisex',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-woman-patterned-handbag',
    name: 'Elder Woman Patterned Handbag',
    image: 'https://www.freepik.com/free-photo/patterned-handbag_12345692.jpg#uuid=12345692-1234-5678-1234-567812345692',
    price: 2599,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-rocket-sling',
    name: 'Kids Rocket Sling Bag',
    image: 'https://m.media-amazon.com/images/I/61fJhWz1SrL._AC_UY1100_.jpg',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-orange-sling',
    name: 'Teen Girl Orange Sling Bag',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1199,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-urban-duffel',
    name: 'Adult Man Urban Duffel',
    image: 'https://m.media-amazon.com/images/I/71yYzXz0CcL._AC_UY1100_.jpg',
    price: 2299,
    gender: 'male',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  },
  {
    id: 'elder-woman-canvas-sling',
    name: 'Elder Woman Canvas Sling',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 1899,
    gender: 'female',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-dolphin-bag',
    name: 'Kids Dolphin Print Bag',
    image: 'https://www.pexels.com/photo/dolphin-backpack-934082/',
    price: 799,
    gender: 'unisex',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-unisex-blue-backpack',
    name: 'Unisex Teen Blue Backpack',
    image: 'https://m.media-amazon.com/images/I/61aCdXy6LmL._AC_UY1100_.jpg',
    price: 1499,
    gender: 'unisex',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-velvet-handbag',
    name: 'Adult Woman Velvet Handbag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2599,
    gender: 'female',
    age: 'adult',
    tags: ['limited']
  },
  {
    id: 'elder-man-urban-backpack',
    name: 'Elder Man Urban Backpack',
    image: 'https://www.freepik.com/free-photo/urban-backpack_12345693.jpg#uuid=12345693-1234-5678-1234-567812345693',
    price: 2399,
    gender: 'male',
    age: 'elder',
    tags: ['new']
  },
  {
    id: 'kids-unicorn-backpack',
    name: 'Kids Unicorn Print Backpack',
    image: 'https://m.media-amazon.com/images/I/71cFgVz8PqL._AC_UY1100_.jpg',
    price: 849,
    gender: 'female',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-boy-red-backpack',
    name: 'Teen Boy Red Backpack',
    image: 'https://images.pexels.com/photos/2900997/pexels-photo-2900997.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'male',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-woman-suede-backpack',
    name: 'Adult Woman Suede Backpack',
    image: 'https://m.media-amazon.com/images/I/61eIjXy2StL._AC_UY1100_.jpg',
    price: 2799,
    gender: 'female',
    age: 'adult',
    tags: ['new']
  },
  {
    id: 'elder-woman-leather-sling',
    name: 'Elder Woman Leather Sling',
    image: 'https://www.freepik.com/free-photo/leather-sling_12345694.jpg#uuid=12345694-1234-5678-1234-567812345694',
    price: 1999,
    gender: 'female',
    age: 'elder',
    tags: ['limited']
  },
  {
    id: 'kids-shark-bag',
    name: 'Kids Shark Print Bag',
    image: 'https://m.media-amazon.com/images/I/71yYzXz0CcL._AC_UY1100_.jpg',
    price: 799,
    gender: 'male',
    age: 'child',
    tags: ['popular'],
    sale: '[10%]'
  },
  {
    id: 'teen-girl-blue-backpack',
    name: 'Teen Girl Blue Backpack',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1399,
    gender: 'female',
    age: 'teen',
    tags: ['trending'],
    sale: '[15%]'
  },
  {
    id: 'adult-man-eco-backpack',
    name: 'Adult Man Eco Backpack',
    image: 'https://images.unsplash.com/photo-1598532163257-0bf54057d37a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: 2099,
    gender: 'male',
    age: 'adult',
    tags: ['popular'],
    sale: '[20%]'
  }
];

export default bagsData;