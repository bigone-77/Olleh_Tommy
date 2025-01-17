import { useLocation } from 'react-router-dom';

import TimeLine from '../../../Components/TimeLine';
import Floating1 from '../../../Components/SurveyFloating/SurveyComponents/Floating1';
import Floating2 from '../../../Components/SurveyFloating/SurveyComponents/Floating2';
import Floating4 from '../../../Components/SurveyFloating/SurveyComponents/Floating4';
import Floating5 from '../../../Components/SurveyFloating/SurveyComponents/Floating5';
import Floating6 from '../../../Components/SurveyFloating/SurveyComponents/Floating6';
import Floating7 from '../../../Components/SurveyFloating/SurveyComponents/Floating7';
import Floating8 from '../../../Components/SurveyFloating/SurveyComponents/Floating8';
import FloatingProgressBar from '../../../Components/SurveyFloating/ProgressBar';

const SurveyFloating = () => {
  let pageNo = Number(new URLSearchParams(useLocation().search).get('page'));

  if (!pageNo) {
    pageNo = 1;
  }

  return (
    <div>
      <TimeLine
        title="딱 맞는 교육 찾기"
        imgSrc={`/assets/TimeLine/floating.png`}
        contents="배우고 싶은 마음만 있다면 준비 완료! 올래가 딱 맞는 교육을 찾아 드릴게요."
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <FloatingProgressBar step={pageNo} />
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl flex relative m-auto top-[47px]">
          {pageNo === 1 && <Floating1 />}
          {pageNo === 2 && <Floating2 />}
          {pageNo === 4 && <Floating4 />}
          {pageNo === 5 && <Floating5 />}
          {pageNo === 6 && <Floating6 />}
          {pageNo === 7 && <Floating7 />}
          {pageNo === 8 && <Floating8 />}
        </div>
      </div>
    </div>
  );
};

export default SurveyFloating;
