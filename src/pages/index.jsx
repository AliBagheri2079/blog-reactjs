import AccordionComponent from "@/components/Accordion";
import Description from "@/components/Description";
import ProductDialog from "@/components/Dialog/Product";
import Payment from "@/components/Form/Payment";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const data = [
  {
    label: "Description",
    value: "description",
    desc: <Description />,
  },
  {
    label: "Accordion Example",
    value: "accordion",
    desc: <AccordionComponent />,
  },
  {
    label: "Product Dialog",
    value: "product",
    desc: <ProductDialog />,
  },
  {
    label: "Payment Process",
    value: "payment",
    desc: <Payment />,
  },
];

const Pages = () => {
  return (
    <Tabs value="html">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default Pages;
