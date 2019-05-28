import videoUrl from 'js-video-url-parser';

const DEFAULT_PROVIDERS = ['youtube', 'vimeo'];

export default {
  isValid: (video, providers = DEFAULT_PROVIDERS) => {
    if (!video) {
      return true;
    }
    const info = videoUrl.parse(video);

    return !!(info && providers.includes(info.provider));
  },
};
