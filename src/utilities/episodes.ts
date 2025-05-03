interface ITitleAttr {
    title: string,
    episode: number
}

export const getTitleAttr = (string: string): ITitleAttr => {
  const arr = string.split("-");
  const title = arr[1];
  const episode = arr[0].substring(8, arr[0].length);
  return {
    title: title,
    episode: Number(episode)
  }
}