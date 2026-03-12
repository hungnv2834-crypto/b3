import { Table, Alert, Spin } from "antd"
import { useUsers } from "../hooks/useUsers"

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
    title: "Price ($)",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  }
]

const UserPage = () => {
  const { data, isLoading, isError, error } = useUsers()

  if (isError) {
    return <Alert message="Lỗi" description={error.message} type="error" showIcon />
  }

  return (
    <div>
      <h2>Quản lý Sản phẩm</h2>
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

export default UserPage
