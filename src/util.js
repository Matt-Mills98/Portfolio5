import gsap from "gsap";


export function getScrollPosition(animation, progress) {
    let p = gsap.utils.clamp(0, 1, progress || 0),
      st = animation.scrollTrigger,
      containerAnimation = st.vars.containerAnimation;
    if (containerAnimation) {
      let time = st.start + (st.end - st.start) * p;
      st = containerAnimation.scrollTrigger;
      return (
        st.start + (st.end - st.start) * (time / containerAnimation.duration())
      );
    }
    return st.start + (st.end - st.start) * p;
  }