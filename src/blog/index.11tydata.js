module.exports = {
  eleventyComputed: {
    modifDate: data => {
      if (Object.keys(data).length === 0) return;
      const lastPostModifDate = data.collections.post[data.collections.post.length-1].data.modifDate;
      return lastPostModifDate>data.modifDate ? lastPostModifDate : data.modifDate;
    }
  }
}
