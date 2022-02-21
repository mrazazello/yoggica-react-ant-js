import React from 'react';
import { Link } from 'react-router-dom';
import AdminCommonTemplate from '../Components/AdminCommonTemplate'
import { Typography, Table, Tag, Button, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Avraam Josef',
    email: 'test@maincondance.com',
    revenue: 1500,
    status: ['Client', 'Yogis'],
    lastClass: '12.05.2021',
  },
];

for (let i = 2; i < 45; i +=1) {
  dataSource.push({
    key: i,
    name: `John Cristofers ${i}`,
    email: 'some.email@gmail.com',
    revenue: 0,
    status: ['New', 'Yogis'],
    lastClass: '12.05.2021',
  });
}



export default class Yogis extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Link to="/yog">
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          >{text}</Highlighter>
        </Link>
      ) : (
        <Link to="/yog">{text}</Link>
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  deleteItems = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { Title } = Typography;
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const columns = [
      {
        title: 'Name & Surname',
        dataIndex: 'name',
        key: 'name',
        render: title => <Link to="/yog">{title}</Link>,
        sorter: (a, b) => a.name - b.name,
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Revenue',
        dataIndex: 'revenue',
        key: 'revenue',
        sorter: (a, b) => a.revenue - b.revenue,
      },
      {
        title: 'Status & Role',
        dataIndex: 'status',
        key: 'status',
        filters: [
          { text: 'New', value: 'New' },
          { text: 'Client', value: 'Client' },
          { text: 'Yogis', value: 'Yogis' },
        ],
        onFilter: (value, record) => record.status.includes(value),
        render: tags => (
          <>
            {tags.map(tag => {
              return (
                <Tag color='green' key={tag}>{tag}</Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Last class',
        dataIndex: 'lastClass',
        key: 'lastClass',
      },
    ];
  
    return (
      <AdminCommonTemplate>
        <Title>Yogis list</Title>
        <div style={{ marginBottom: 16 }}>
          <Space>
            <Button type="primary">Add yogis</Button>
            <Button onClick={this.deleteItems} disabled={!hasSelected} loading={loading}>Delete</Button>
          </Space>
        </div>
        <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
      </AdminCommonTemplate>
    );
  }
}
