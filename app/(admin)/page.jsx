import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import CapacityRequestComponent from '@/components/data-tables/capacity-requests/capacity-request-component';
import CapacityListComponent from '@/components/data-tables/capacity-list/capacity-list-component';
import UsersListComponent from '@/components/data-tables/users/users-list-component';

const page = async () => {
  return (
    <>
      <Tabs defaultValue="newRequest" className="w-full gap-4 flex mt-5">
        <TabsList className="grid grid-cols-max min-w-[300px] max-w-[300px]">
          <TabsTrigger value="newRequest" className="sidebar-tab">
            New Capacity Requests <span>1</span>
          </TabsTrigger>
          <TabsTrigger value="capacityList" className="sidebar-tab">
            All Capacities <span>1</span>
          </TabsTrigger>
          <TabsTrigger value="user" className="sidebar-tab">
            Users <span>1</span>
          </TabsTrigger>
        </TabsList>
        {/* Tab content */}
        <TabsContent className="w-full" value="newRequest">
          <CapacityRequestComponent />
        </TabsContent>
        <TabsContent className="w-full" value="capacityList">
          <CapacityListComponent />
        </TabsContent>
        <TabsContent className="w-full" value="user">
          <UsersListComponent />
        </TabsContent>
      </Tabs>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
      />
    </>
  );
};

export default page;
