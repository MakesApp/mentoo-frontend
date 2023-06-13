import mentooIcon from '../../assets/images/mentoo.svg';
import byAppleSeedsIcon from '../../assets/images/byAppleSeeds.svg';

const Logo = () => {
  return (
    <>
      <img src={mentooIcon} alt="mentoo" />
      <img
        src={byAppleSeedsIcon}
        alt="byAppleSeeds"
        className="by-appleseeds"
      />
    </>
  );
};

export default Logo;
