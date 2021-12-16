 const INITIAL_STATE = [
    // {
    //     "id": 5,
    //     "extratype": "Venue Services",
    //     "extradata": "Banquet/Marquee",
    //     "is_deleted": 0,
    //     "createdAt": "2021-09-27T18:49:53.000Z",
    //     "updatedAt": "2021-09-27T18:49:53.000Z"
    // },
    // {
    //     "id": 4,
    //     "extratype": "Venue Services",
    //     "extradata": "Convention Center",
    //     "is_deleted": 0,
    //     "createdAt": "2021-09-27T18:49:53.000Z",
    //     "updatedAt": "2021-09-27T18:49:53.000Z"
    // },

    {
        "id": 39,
        "extratype": "Event Type",
        "extradata": "Maiyat",
        "is_deleted": 0,
        "createdAt": "2021-12-08T15:59:02.000Z",
        "updatedAt": "2021-12-08T16:16:14.000Z"
    },
    {
        "id": 38,
        "extratype": "Event Type",
        "extradata": "Weddings",
        "is_deleted": 0,
        "createdAt": "2021-12-08T15:57:21.000Z",
        "updatedAt": "2021-12-08T15:57:21.000Z"
    },
    {
        "id": 36,
        "extratype": "Dance Floor Circular Trussing",
        "extradata": "Circular Trussing 2",
        "is_deleted": 0,
        "createdAt": "2021-09-28T06:06:42.000Z",
        "updatedAt": "2021-09-28T06:06:42.000Z"
    },
    {
        "id": 35,
        "extratype": "Dance Floor Circular Trussing",
        "extradata": "Circular Trussing 1",
        "is_deleted": 0,
        "createdAt": "2021-09-28T06:06:42.000Z",
        "updatedAt": "2021-09-28T06:06:42.000Z"
    },
    {
        "id": 34,
        "extratype": "Dance Floor Size",
        "extradata": "Size 2",
        "is_deleted": 0,
        "createdAt": "2021-09-28T06:01:41.000Z",
        "updatedAt": "2021-09-28T06:01:41.000Z"
    },
    {
        "id": 33,
        "extratype": "Dance Floor Size",
        "extradata": "Size 1",
        "is_deleted": 0,
        "createdAt": "2021-09-28T06:01:41.000Z",
        "updatedAt": "2021-09-28T06:01:41.000Z"
    },
    {
        "id": 32,
        "extratype": "Dance Floor Type",
        "extradata": "Floor 2",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:44:03.000Z",
        "updatedAt": "2021-09-28T05:44:03.000Z"
    },
    {
        "id": 31,
        "extratype": "Dance Floor Type",
        "extradata": "Floor 1",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:44:03.000Z",
        "updatedAt": "2021-09-28T05:44:03.000Z"
    },
    {
        "id": 30,
        "extratype": "Floral Price Range",
        "extradata": "200K - 250K",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:36:44.000Z",
        "updatedAt": "2021-09-28T05:36:44.000Z"
    },
    {
        "id": 29,
        "extratype": "Floral Price Range",
        "extradata": "150K - 200K",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:36:44.000Z",
        "updatedAt": "2021-09-28T05:36:44.000Z"
    },
    {
        "id": 28,
        "extratype": "Floral Price Range",
        "extradata": "100K - 150K",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:35:23.000Z",
        "updatedAt": "2021-09-28T05:35:23.000Z"
    },
    {
        "id": 27,
        "extratype": "Floral Price Range",
        "extradata": "50K - 100K",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:35:23.000Z",
        "updatedAt": "2021-09-28T05:35:23.000Z"
    },
    {
        "id": 26,
        "extratype": "Floral Kind of Flowers",
        "extradata": "Flower 2",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:21:29.000Z",
        "updatedAt": "2021-09-28T05:21:29.000Z"
    },
    {
        "id": 25,
        "extratype": "Floral Kind of Flowers",
        "extradata": "Flower 1",
        "is_deleted": 0,
        "createdAt": "2021-09-28T05:21:29.000Z",
        "updatedAt": "2021-09-28T05:21:29.000Z"
    },
    {
        "id": 23,
        "extratype": "Floral Services",
        "extradata": "Others",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:38:28.000Z",
        "updatedAt": "2021-09-28T04:38:28.000Z"
    },
    {
        "id": 22,
        "extratype": "Floral Services",
        "extradata": "Lounge Structures",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:38:28.000Z",
        "updatedAt": "2021-09-28T04:38:28.000Z"
    },
    {
        "id": 21,
        "extratype": "Floral Services",
        "extradata": "VIP Table Arrangments",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:36:59.000Z",
        "updatedAt": "2021-09-28T04:36:59.000Z"
    },
    {
        "id": 20,
        "extratype": "Floral Services",
        "extradata": "Walkaway Structures\r\n",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:36:59.000Z",
        "updatedAt": "2021-09-28T04:36:59.000Z"
    },
    {
        "id": 19,
        "extratype": "Floral Services",
        "extradata": "Console Tables",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:36:23.000Z",
        "updatedAt": "2021-09-28T04:36:23.000Z"
    },
    {
        "id": 18,
        "extratype": "Floral Services",
        "extradata": "Centerpiece on Tables",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:36:23.000Z",
        "updatedAt": "2021-09-28T04:36:23.000Z"
    },
    {
        "id": 17,
        "extratype": "Floral Services",
        "extradata": "Entrance",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:35:43.000Z",
        "updatedAt": "2021-09-28T04:35:43.000Z"
    },
    {
        "id": 16,
        "extratype": "Floral Services",
        "extradata": "Stage",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:35:43.000Z",
        "updatedAt": "2021-09-28T04:35:43.000Z"
    },
    {
        "id": 15,
        "extratype": "Decoration Stage",
        "extradata": "No",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:28:32.000Z",
        "updatedAt": "2021-09-28T04:28:32.000Z"
    },
    {
        "id": 14,
        "extratype": "Decoration Stage",
        "extradata": "Yes",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:28:32.000Z",
        "updatedAt": "2021-09-28T04:28:32.000Z"
    },
    {
        "id": 13,
        "extratype": "Decoration Generator",
        "extradata": "No",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:03:04.000Z",
        "updatedAt": "2021-09-28T04:03:04.000Z"
    },
    {
        "id": 12,
        "extratype": "Decoration Generator",
        "extradata": "Yes",
        "is_deleted": 0,
        "createdAt": "2021-09-28T04:03:04.000Z",
        "updatedAt": "2021-09-28T04:03:04.000Z"
    },
    {
        "id": 11,
        "extratype": "Decoration Classifies",
        "extradata": "Classifies 2",
        "is_deleted": 0,
        "createdAt": "2021-09-28T01:45:52.000Z",
        "updatedAt": "2021-09-28T01:45:52.000Z"
    },
    {
        "id": 10,
        "extratype": "Decoration Classifies",
        "extradata": "Classifies 1",
        "is_deleted": 0,
        "createdAt": "2021-09-28T01:45:52.000Z",
        "updatedAt": "2021-09-28T01:45:52.000Z"
    },
    {
        "id": 9,
        "extratype": "Decoration Event Segregate",
        "extradata": "No",
        "is_deleted": 0,
        "createdAt": "2021-09-28T01:12:11.000Z",
        "updatedAt": "2021-09-28T01:12:11.000Z"
    },
    {
        "id": 8,
        "extratype": "Decoration Event Segregate",
        "extradata": "Yes",
        "is_deleted": 0,
        "createdAt": "2021-09-28T01:12:11.000Z",
        "updatedAt": "2021-09-28T01:12:11.000Z"
    },
    {
        "id": 7,
        "extratype": "Venue Price Range",
        "extradata": "100k - 150k",
        "is_deleted": 0,
        "createdAt": "2021-09-28T00:09:06.000Z",
        "updatedAt": "2021-09-28T00:09:06.000Z"
    },
    {
        "id": 6,
        "extratype": "Venue Price Range",
        "extradata": "50K - 100K",
        "is_deleted": 0,
        "createdAt": "2021-09-28T00:09:06.000Z",
        "updatedAt": "2021-09-28T00:09:06.000Z"
    },
    {
        "id": 5,
        "extratype": "Venue Services",
        "extradata": "Banquet/Marquee",
        "is_deleted": 0,
        "createdAt": "2021-09-27T18:49:53.000Z",
        "updatedAt": "2021-09-27T18:49:53.000Z"
    },
    {
        "id": 4,
        "extratype": "Venue Services",
        "extradata": "Convention Center",
        "is_deleted": 0,
        "createdAt": "2021-09-27T18:49:53.000Z",
        "updatedAt": "2021-09-27T18:49:53.000Z"
    },
    {
        "id": 3,
        "extratype": "Event Type",
        "extradata": "Mendhi",
        "is_deleted": 0,
        "createdAt": "2021-09-27T18:32:05.000Z",
        "updatedAt": "2021-09-27T18:32:05.000Z"
    },
    {
        "id": 2,
        "extratype": "Event Type",
        "extradata": "Valima",
        "is_deleted": 0,
        "createdAt": "2021-12-08T07:04:06.000Z",
        "updatedAt": "2021-12-08T07:04:06.000Z"
    },
    {
        "id": 1,
        "extratype": "Event Type",
        "extradata": "Weddings",
        "is_deleted": 0,
        "createdAt": "2021-12-08T07:04:06.000Z",
        "updatedAt": "2021-12-08T07:04:06.000Z"
    }

]

export default INITIAL_STATE