module.exports = {
  insert: {
    users: `
      INSERT INTO users (
        display_name, 
        email, 
        password, 
        image
      ) VALUES (
        "Brett Wiltshire", 
        "brett@email.com", 
        "123456", 
        "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      );
    `,
    categories: `
      INSERT INTO categories (
        name
      ) VALUES (
        "News"
      );
    `,
    blog_posts:  `
      INSERT INTO blog_posts (
        title, 
        content, 
        user_id, 
        published, 
        updated
      ) VALUES (
        "Latest updates, August 1st", 
        "The whole text for the article goes here in this key", 
        1, 
        "2011-08-01 19:58:00", 
        "2011-08-01 19:58:51.947"
      );
    `,
    posts_categories: `
      INSERT INTO posts_categories (
        post_id, 
        category_id
      ) VALUES (
        1, 
        1
      );
    `
  },
  select: {
    users: `
      SELECT * 
      FROM users 
      WHERE display_name = "Brett Wiltshire"
    `,
    categories: `
      SELECT * 
      FROM categories 
      WHERE name = "News";
    `,
    blog_posts: `
      SELECT * 
      FROM blog_posts 
      WHERE title = "Latest updates, August 1st";
    `,
    posts_categories: `
      SELECT * 
      FROM posts_categories 
      WHERE post_id = 1;
    `
  },
  expect: {
    users: {
      id: 1,
      display_name: 'Brett Wiltshire',
      email: 'brett@email.com',
      password: '123456',
      image: 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png'
    },
    categories: {
      id: 1,
      name: 'News'
    },
    blog_posts: {
      general: {
        id: 1,
        title: 'Latest updates, August 1st',
        content: 'The whole text for the article goes here in this key',
        user_id: 1,
      },
      published: 1312228680000,
      updated: 1312228732000
    },
    posts_categories: {
      post_id: 1,
      category_id: 1,
    }
  }
}
