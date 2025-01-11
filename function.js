const showAllData = (post_photo) => {
  if (post_photo && post_photo.length > 0) {
    // Parse the JSON string of images if necessary
    const photo = JSON.parse(post_photo);
    const photoCount = photo.length;

    if (photoCount === 1) {
      // Single image: Full width
      return `
        <div class="post-image single">
          <img src="./media/posts/${photo[0]}" alt="Post Image" />
        </div>
      `;
    } else if (photoCount === 2) {
      // Two images: Side by side

      return `
            <div class="post-images two">
              ${photo
                .map(
                  (photos) => `
                  <div class="image">
                    <img src="./media/posts/${photos}" alt="Post Image" />
                  </div>
                `
                )
                .join("")}
            </div>
          `;
    } else if (photoCount === 3) {
      // Three images: One large on top, two smaller below

      return `
            <div class="post-images three ">
              ${photo
                .map(
                  (photos) => `
                  <div class="image">
                    <img src="./media/posts/${photos}" alt="Post Image" />
                  </div>
                `
                )
                .join("")}
            </div>
          `;
    } else if (photoCount === 4) {
      // Three images: One large on top, two smaller below

      return `
            <div class="post-images four ">
              ${photo
                .map(
                  (photos) => `
                  <div class="image">
                    <img src="./media/posts/${photos}" alt="Post Image" />
                  </div>
                `
                )
                .join("")}
            </div>
          `;
    } else {
      return "";
    }
  } else {
    // If no images are present, return an empty string
    return "";
  }
};
