import Nav from '../model/Nav';

const NavData: Nav[] = [
    {
      "id": 1,
      "text": "Entries",
      "submenus": []
    },
    {
      "id": 2,
      "text": "Inquiry",
      "submenus": [
        {
          "id": 1,
          "text": "ITEMS",
          "isDefault": true,
          "children": [
            {
              "id": 1,
              "text": "SEARCH",
              "link": "/search"
            }
          ]
        },
        {
          "id": 2,
          "text": "INVENTORY",
          "link": "/inventory"
        },
        {
          "id": 3,
          "text": "ORDERS",
          "link": "/orders"
        },
        {
          "id": 4,
          "text": "CUSTOMER",
          "link": "/customer"
        },
        {
          "id": 5,
          "text": "TRUCKS",
          "link": "/trucks"
        },
        {
          "id": 6,
          "text": "VENDORS",
          "link": "/vendors"
        },
        {
          "id": 7,
          "text": "CARRIERS",
          "link": "/carriers"
        },
        {
          "id": 8,
          "text": "OWNERS",
          "link": "/owners"
        },
        {
          "id": 9,
          "text": "WAREHOUSES",
          "link": "/warehouses"
        },
        {
          "id": 10,
          "text": "RUNS",
          "link": "/runs"
        },
        {
          "id": 11,
          "text": "BILLING",
          "link": "/billing"
        }
      ]
    },
    {
      "id": 3,
      "text": "Interfaces",
      "submenus": []
    }
  ];
export default NavData;
