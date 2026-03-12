import { Table, Button, Alert, Space } from "antd"
import { ReloadOutlined } from "@ant-design/icons"
import { usePosts } from "../hooks/usePosts"

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 60,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  }
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
        <h2>Danh sách Bài viết (Bài tập 1 & 2)</h2>
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
        pagination={{ pageSize: 5 }}
      />
    </div>
  )
}

export default PostPage
