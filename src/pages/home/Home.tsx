import MainTable from "../../components/table/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestListUserDetail,
  setRequestListUserDetail,
} from "../../app/store/UserDetail";
import { useFetch } from "../../hooks/UseFetch";
import { onfetchUserDetail } from "../../apis/GetUserDetail";

const Home = () => {
  const dispatch = useDispatch();
  const requestUserDetail = useSelector(requestListUserDetail);

  const { data: datas, loading } = useFetch(
    async () => await onfetchUserDetail(requestUserDetail),
    [requestUserDetail]
  );

  const columns = [
    {
      title: "Fullname",
      dataIndex: "name",
      key: "name",
      className: "ant-table-cell-coler",
      render: (value: any, item: any) => (
        <>
          {
            <a>
              {item.name.title} {item.name.first} {item.name.last}
              {console.log("ttt:", item)}
            </a>
          }
        </>
      ),
      sorter: (a: any, b: any) => a - b,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (value: any, item: any) => <>{item.login?.username} </>,
      sorter: (a: any, b: any) => a - b,
    },
    {
      title: "icon",
      dataIndex: "thumbnail",
      key: "thumbnail",
      className: "ant-table-cell-coler",
      render: (value: any, item: any) => (
        <>
          <img src={item.picture.thumbnail} />
        </>
      ),
    },
  ];

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log("pagination.results:", pagination);

    dispatch(
      setRequestListUserDetail({
        ...requestListUserDetail,
        page: pagination.current,
        results: pagination.pageSize,
        sortField: !sorter.field ? "" : sorter.field,
        asc: sorter.order === "ascend" ? true : false,
      })
    );
  };

  return (
    <div>
      <MainTable
        rowKey="id"
        loading={loading}
        data={datas}
        columns={columns}
        textEmpty={"Empty"}
        bordered={false}
        onChange={onChange}
        total={100}
        request={requestUserDetail}
      />
    </div>
  );
};

export default Home;
