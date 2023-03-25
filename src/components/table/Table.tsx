import { Row, Table } from "antd";
import { IprosTable } from "../../types/Type";

const MainTable = ({
  rowKey,
  loading,
  onChange,
  data,
  onClickItem,
  request,
  total,
  columns,
  textEmpty,
  bordered,
  defaultPageSize,
  rowSelection,
}: IprosTable) => {
  return (
    <Row
      className={[
        "table-campaign",
        !onClickItem ? "" : "table-select-row",
      ].join(" ")}
    >
      <Table
        rowKey={rowKey}
        bordered={bordered}
        locale={{ emptyText: textEmpty }}
        loading={loading}
        onChange={onChange}
        dataSource={data}
        columns={columns}
        onRow={(record: any) => {
          return {
            onClick: (event) => (!onClickItem ? null : onClickItem(record)),
          };
        }}
        pagination={{
          current: request?.page,
          pageSize: request?.pageSize,
          total: total,
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        sortDirections={["ascend", "descend", "ascend"]}
        rowSelection={rowSelection}
      />
    </Row>
  );
};

export default MainTable;
