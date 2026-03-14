import { Table, Button, Alert, Space, Image, Tag } from "antd"
import { ReloadOutlined } from "@ant-design/icons"
import { usePosts } from "../hooks/usePosts"

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 60,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    width: 80,
    render: (image) => (
      <Image
        src={image}
        alt="product"
        width={50}
        height={50}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    ellipsis: true,
  },
  {
    title: "Price ($)",
    dataIndex: "price",
    key: "price",
    width: 100,
    sorter: (a, b) => a.price - b.price,
    render: (price) => `$${price.toFixed(2)}`,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: 160,
    render: (category) => <Tag color="blue">{category}</Tag>,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    width: 100,
    sorter: (a, b) => a.rating.rate - b.rating.rate,
    render: (rating) => `⭐ ${rating.rate} (${rating.count})`,
  },
]

const PostPage = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = usePosts()

  if (isError) {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Lỗi" description={error.message} type="error" showIcon />
        <Button onClick={() => refetch()} icon={<ReloadOutlined />}>Thử lại</Button>
      </Space>
    )
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2>Danh sách Sản phẩm (Fake Store API)</h2>
        <Button 
          type="primary" 
          onClick={() => refetch()} 
          loading={isFetching}
          icon={<ReloadOutlined />}
        >
          Reload (Refetch)
        </Button>
      </div>
      
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        rowKey="id"
        bordered
        scroll={{ x: 800 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} / ${total} sản phẩm`,
        }}
      />
    </div>
  )
}

export default PostPage
