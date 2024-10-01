export class MovieListType {
  static listType(url) {
    const splitUrl = url.split("/")
    const lastSplit = splitUrl.pop()
    if (lastSplit === "") {
      return "HOME"
    } else if (lastSplit === "popular") {
      return "POPULAR"
    } else if (lastSplit === "top") {
      return "TOP"
    } else if (lastSplit === "upcoming") {
      return "UPCOMING"
    }
  }
  // Home: airing: https://api.jikan.moe/v4/anime?status=airing 
  // Popular: sory by score and airing: https://api.jikan.moe/v4/anime?sort=desc&order_by=score&status=airing
  // Top Rated: sort by score: https://api.jikan.moe/v4/anime?sort=desc&order_by=score
  // Upcoming: https://api.jikan.moe/v4/anime?status=upcoming

  static url(listType) {
    if (listType === "HOME") {
      return "https://api.jikan.moe/v4/anime?status=airing"
    } else if (listType === "POPULAR") {
      return "https://api.jikan.moe/v4/anime?sort=desc&order_by=score&status=airing&sfw"
    } else if (listType === "TOP") {
      return "https://api.jikan.moe/v4/anime?sort=desc&order_by=score"
    } else if (listType === "UPCOMING") {
      return "https://api.jikan.moe/v4/anime?status=upcoming"
    }
  }

  static getId(url) {
    const splitUrl = url.split("/")
    if (splitUrl[1] === "anime") {
      return Number(splitUrl.pop())
    } else {
      return null
    }
  }
}
