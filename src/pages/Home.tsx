import { FC, useRef, useCallback, useEffect } from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import VarenukBlock from "../components/VarenukBlock";
import { Pagination } from "../components/Pagination";
import { Skeleton } from "../components/VarenukBlock/Skeleton";

import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage, setSort } from "../redux/filter/slice";
import { SortSlice } from "../redux/filter/types";
import { selectVarenuk } from "../redux/varenuk/selectors";
import { fetchVarenuks } from "../redux/varenuk/asyncActions";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectVarenuk);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const onChangeSort = (obj: SortSlice) => {
    dispatch(setSort(obj));
  };

  const getVarenuks = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchVarenuks({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  useEffect(() => {
    // if (isMounted.current) {
    //   const queryString = qs.stringify({
    //     sortProperty: sort.sortProperty,
    //     categoryId,
    //     currentPage,
    //   });

    //   navigate(`?${queryString}`);
    // }
    // if (!window.location.search) {
    //   dispatch(fetchVarenuks({} as SearchVarenukParams));
    // }
    // getVarenuks();
    // isMounted.current = true;
    // }, [categoryId, sort.sortProperty, currentPage]);

    // useEffect(() => {
    //   if (window.location.search) {
    //     const params = qs.parse(
    //       window.location.search.substring(1)
    //     ) as unknown as SearchVarenukParams;

    //     const sort = sortList.find((obj) => obj.sortProperty == params.sortBy);

    //     dispatch(
    //       setFilters({
    //         searchValue: params.search,
    //         categoryId: Number(params.category),
    //         currentPage: Number(params.currentPage),
    //         sort: sort || sortList[0],
    //       })
    //     );
    //     isSearch.current = true;
    //   }
    // }, []);

    // useEffect(() => {
    //   window.scrollTo(0, 0);

    //   if (!isSearch.current) {
    getVarenuks();
    // }
    // isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const varenuks = items.map((obj) => <VarenukBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль не вдалося отримати вариники</p>
          <p>Спробуйте повторити пізніше</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : varenuks}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
