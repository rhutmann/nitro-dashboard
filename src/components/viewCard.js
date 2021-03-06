import BudgetCard from "./budgetCard/budget";
import CreditCard from "./creditCard/creditCard";
import FinancialAdviceCard from "./FinancialAdvice/financialAdvice";
import LoanCard from "./LoanCard/Loan";
import Profile from "./profile/profile";
import ReportCard from "./Reports/report";
import Sidebar from "./sidebar/sidebar";
import "./styles/viewcards.css";
import SubscriptionsCard from "./subscriptionsCard/subscriptions";
import TransactionCard from "./transactionCard/transactions";

const ViewCard = () => {
  return (
    <div className='overviewCard flex bg-gradient-to-r from-zinc-800 rounded-2xl shadow-xl'>
      <Sidebar />
      <div className='overviewItems'>
        <Profile />
        {/* container */}
        <div className='grid-Conatainer'>
          <div className='flex flex-col '>
            <CreditCard className='' />
            <BudgetCard className=' budget' />
          </div>
          <div className='flex flex-col '>
            <TransactionCard />
            <SubscriptionsCard />
            <LoanCard />
          </div>
          <div className='flex flex-col'>
            <ReportCard />
            <CreditCard />
            <FinancialAdviceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
