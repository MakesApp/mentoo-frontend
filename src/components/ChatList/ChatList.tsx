import Header from '../Header/Header';
import arrowLeft from '../../assets/images/arrow-left.svg';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import List from '../../pages/Place/components/List/List';
import { getChatPartners } from '../../api/services/api';
import { useQuery } from 'react-query';

const ChatList = () => {
  const { data: chatPartners } = useQuery('chat', getChatPartners);

  return (
    <div>
      <Header >
        <Link to={{ pathname: '/' }}>
          <img src={arrowLeft} alt="arrow left" />
        </Link>
      </Header>
      <Title title={'מחוברים לחיים'} subTitle={'ההודעות שלי'} />
      {chatPartners&&<List users={chatPartners}>
        {() => {
          // Render the user component or JSX here
          return <></>;
        }}
      </List>
}
    </div>
  );
};

export default ChatList;
