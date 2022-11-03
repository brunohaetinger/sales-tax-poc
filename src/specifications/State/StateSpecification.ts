import Category from "../../models/Category";

export interface StateSpecification {
    isSatisfiedBy(): boolean;
    getTax(category: Category): number;
}
