import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const FoodAndDrinks = () => {
  const navigationItems = [
    { id: "local_cuisine", title: "Local Cuisine" },
    { id: "continental_cuisine", title: "Continental Cuisine" },
    { id: "street_food", title: "Street Food" },
  ];

  const localCuisineData = [
    {
      key: "1",
      dish: "Nepali Thali",
      description: "A platter consisting of dal, bhat, tarkari, and achar.",
    },
    {
      key: "2",
      dish: "Momos",
      description:
        "Steamed dumplings filled with vegetables, chicken, or buff.",
    },
    {
      key: "3",
      dish: "Choila",
      description: "Spicy grilled meat dish, often made with chicken or buff.",
    },
    {
      key: "4",
      dish: "Sekuwa",
      description: "Skewered grilled meat cooked over a traditional wood fire.",
    },
    {
      key: "5",
      dish: "Carrot Pudding (Gajar ko Haluwa)",
      description:
        "A traditional dessert made with grated carrots, milk, and cardamom.",
    },
    {
      key: "6",
      dish: "Laphing",
      description:
        "Cold noodle dish with Tibetan-Nepali origins, served with flavorful broth.",
    },
    {
      key: "7",
      dish: "Tongba",
      description:
        "Traditional millet brew consumed in the Himalayan regions, sipped through a bamboo straw.",
    },
  ];

  const localCuisineColumns = [
    { title: "Dish", dataIndex: "dish", key: "dish" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const streetFoodData = [
    {
      key: "1",
      dish: "Chatpate",
      description: "Savory mix of puffed rice, noodles, and spices.",
    },
    {
      key: "2",
      dish: "Samosas",
      description:
        "Fried pastries filled with spiced potatoes, vegetables, or meat.",
    },
    {
      key: "3",
      dish: "Sel Roti",
      description: "Ring-shaped fried bread, enjoyed with Nepali tea.",
    },
  ];

  const streetFoodColumns = [
    { title: "Dish", dataIndex: "dish", key: "dish" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/6 ">
          <LeftSidebar />
        </div>

        <div className="w-3/5 ">
          <Row>
            <Col>
              <div className="overflow-hidden">
                <Title level={2}>Food and Drinks</Title>

                <Divider />

                <div id="local_cuisine">
                  <Title level={3}>Local Cuisine</Title>
                  <Table
                    dataSource={localCuisineData}
                    columns={localCuisineColumns}
                    pagination={false}
                  />
                </div>

                <Divider />

                <div id="continental_cuisine">
                  <Title level={3}>Continental Cuisine</Title>
                  <Paragraph>
                    While Nepal's local cuisine is a highlight, the major cities
                    of Kathmandu and Pokhara also cater to international tastes,
                    offering a wide range of continental cuisines. From Italian
                    pizzerias and Mexican taquerias to Chinese and Indian
                    restaurants, visitors can find a variety of global flavors
                    to satisfy their cravings.
                  </Paragraph>
                </div>

                <Divider />

                <div id="street_food">
                  <Title level={3}>Street Food</Title>
                  <Table
                    dataSource={streetFoodData}
                    columns={streetFoodColumns}
                    pagination={false}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="w-1/5">
          <RightSidebar navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
};

export default FoodAndDrinks;
