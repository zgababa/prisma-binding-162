const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregateCart {
  count: Int!
}

type AggregateCartProduct {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateNutritionProfile {
  count: Int!
}

type AggregateNutritionProfileBio {
  count: Int!
}

type AggregateNutritionProfileFamous {
  count: Int!
}

type AggregateNutritionProfileHealthy {
  count: Int!
}

type AggregateNutritionProfilePrice {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserProduct {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Cart implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  selectedCategories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  duration: Int!
  user(where: UserWhereInput): User!
  products(where: CartProductWhereInput): CartProduct
}

"""A connection to a list of items."""
type CartConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  duration: Int!
  selectedCategories: CategoryCreateManyInput
  user: UserCreateOneInput!
  products: CartProductCreateOneInput
}

"""An edge in a connection."""
type CartEdge {
  """The item at the end of the edge."""
  node: Cart!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  duration_ASC
  duration_DESC
}

type CartPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  duration: Int!
}

type CartProduct implements Node {
  id: ID!
  total: Float!
  included(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  excluded(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type CartProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartProductEdge]!
  aggregate: AggregateCartProduct!
}

input CartProductCreateInput {
  total: Float!
  included: ProductCreateManyWithout_uselessIncludedProductsInput
  excluded: ProductCreateManyWithout_uselessExcludedProductsInput
}

input CartProductCreateOneInput {
  create: CartProductCreateInput
  connect: CartProductWhereUniqueInput
}

input CartProductCreateOneWithoutExcludedInput {
  create: CartProductCreateWithoutExcludedInput
  connect: CartProductWhereUniqueInput
}

input CartProductCreateOneWithoutIncludedInput {
  create: CartProductCreateWithoutIncludedInput
  connect: CartProductWhereUniqueInput
}

input CartProductCreateWithoutExcludedInput {
  total: Float!
  included: ProductCreateManyWithout_uselessIncludedProductsInput
}

input CartProductCreateWithoutIncludedInput {
  total: Float!
  excluded: ProductCreateManyWithout_uselessExcludedProductsInput
}

"""An edge in a connection."""
type CartProductEdge {
  """The item at the end of the edge."""
  node: CartProduct!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartProductOrderByInput {
  id_ASC
  id_DESC
  total_ASC
  total_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartProductPreviousValues {
  id: ID!
  total: Float!
}

type CartProductSubscriptionPayload {
  mutation: MutationType!
  node: CartProduct
  updatedFields: [String!]
  previousValues: CartProductPreviousValues
}

input CartProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartProductWhereInput
}

input CartProductUpdateDataInput {
  total: Float
  included: ProductUpdateManyWithout_uselessIncludedProductsInput
  excluded: ProductUpdateManyWithout_uselessExcludedProductsInput
}

input CartProductUpdateInput {
  total: Float
  included: ProductUpdateManyWithout_uselessIncludedProductsInput
  excluded: ProductUpdateManyWithout_uselessExcludedProductsInput
}

input CartProductUpdateOneInput {
  create: CartProductCreateInput
  connect: CartProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CartProductUpdateDataInput
  upsert: CartProductUpsertNestedInput
}

input CartProductUpdateOneWithoutExcludedInput {
  create: CartProductCreateWithoutExcludedInput
  connect: CartProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CartProductUpdateWithoutExcludedDataInput
  upsert: CartProductUpsertWithoutExcludedInput
}

input CartProductUpdateOneWithoutIncludedInput {
  create: CartProductCreateWithoutIncludedInput
  connect: CartProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CartProductUpdateWithoutIncludedDataInput
  upsert: CartProductUpsertWithoutIncludedInput
}

input CartProductUpdateWithoutExcludedDataInput {
  total: Float
  included: ProductUpdateManyWithout_uselessIncludedProductsInput
}

input CartProductUpdateWithoutIncludedDataInput {
  total: Float
  excluded: ProductUpdateManyWithout_uselessExcludedProductsInput
}

input CartProductUpsertNestedInput {
  update: CartProductUpdateDataInput!
  create: CartProductCreateInput!
}

input CartProductUpsertWithoutExcludedInput {
  update: CartProductUpdateWithoutExcludedDataInput!
  create: CartProductCreateWithoutExcludedInput!
}

input CartProductUpsertWithoutIncludedInput {
  update: CartProductUpdateWithoutIncludedDataInput!
  create: CartProductCreateWithoutIncludedInput!
}

input CartProductWhereInput {
  """Logical AND on all given filters."""
  AND: [CartProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  total: Float

  """All values that are not equal to given value."""
  total_not: Float

  """All values that are contained in given list."""
  total_in: [Float!]

  """All values that are not contained in given list."""
  total_not_in: [Float!]

  """All values less than the given value."""
  total_lt: Float

  """All values less than or equal the given value."""
  total_lte: Float

  """All values greater than the given value."""
  total_gt: Float

  """All values greater than or equal the given value."""
  total_gte: Float
  included_every: ProductWhereInput
  included_some: ProductWhereInput
  included_none: ProductWhereInput
  excluded_every: ProductWhereInput
  excluded_some: ProductWhereInput
  excluded_none: ProductWhereInput
}

input CartProductWhereUniqueInput {
  id: ID
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartWhereInput
}

input CartUpdateInput {
  duration: Int
  selectedCategories: CategoryUpdateManyInput
  user: UserUpdateOneInput
  products: CartProductUpdateOneInput
}

input CartWhereInput {
  """Logical AND on all given filters."""
  AND: [CartWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  selectedCategories_every: CategoryWhereInput
  selectedCategories_some: CategoryWhereInput
  selectedCategories_none: CategoryWhereInput
  user: UserWhereInput
  products: CartProductWhereInput
}

input CartWhereUniqueInput {
  id: ID
}

type Category implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  title: String!
  url: String!
  products: ProductCreateManyWithoutCategoryInput
}

input CategoryCreateManyInput {
  create: [CategoryCreateInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutProductsInput {
  title: String!
  url: String!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  url_ASC
  url_DESC
}

type CategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateDataInput {
  title: String
  url: String
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateInput {
  title: String
  url: String
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateManyInput {
  create: [CategoryCreateInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueNestedInput!]
  upsert: [CategoryUpsertWithWhereUniqueNestedInput!]
}

input CategoryUpdateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  connect: CategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CategoryUpdateWithoutProductsDataInput
  upsert: CategoryUpsertWithoutProductsInput
}

input CategoryUpdateWithoutProductsDataInput {
  title: String
  url: String
}

input CategoryUpdateWithWhereUniqueNestedInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateDataInput!
}

input CategoryUpsertWithoutProductsInput {
  update: CategoryUpdateWithoutProductsDataInput!
  create: CategoryCreateWithoutProductsInput!
}

input CategoryUpsertWithWhereUniqueNestedInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

enum Gender {
  MALE
  FEMALE
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  createCart(data: CartCreateInput!): Cart!
  createNutritionProfileBio(data: NutritionProfileBioCreateInput!): NutritionProfileBio!
  createCategory(data: CategoryCreateInput!): Category!
  createNutritionProfileFamous(data: NutritionProfileFamousCreateInput!): NutritionProfileFamous!
  createUser(data: UserCreateInput!): User!
  createNutritionProfilePrice(data: NutritionProfilePriceCreateInput!): NutritionProfilePrice!
  createNutritionProfile(data: NutritionProfileCreateInput!): NutritionProfile!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  createUserProduct(data: UserProductCreateInput!): UserProduct!
  createNutritionProfileHealthy(data: NutritionProfileHealthyCreateInput!): NutritionProfileHealthy!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateNutritionProfileBio(data: NutritionProfileBioUpdateInput!, where: NutritionProfileBioWhereUniqueInput!): NutritionProfileBio
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateNutritionProfileFamous(data: NutritionProfileFamousUpdateInput!, where: NutritionProfileFamousWhereUniqueInput!): NutritionProfileFamous
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateNutritionProfilePrice(data: NutritionProfilePriceUpdateInput!, where: NutritionProfilePriceWhereUniqueInput!): NutritionProfilePrice
  updateNutritionProfile(data: NutritionProfileUpdateInput!, where: NutritionProfileWhereUniqueInput!): NutritionProfile
  updateCartProduct(data: CartProductUpdateInput!, where: CartProductWhereUniqueInput!): CartProduct
  updateUserProduct(data: UserProductUpdateInput!, where: UserProductWhereUniqueInput!): UserProduct
  updateNutritionProfileHealthy(data: NutritionProfileHealthyUpdateInput!, where: NutritionProfileHealthyWhereUniqueInput!): NutritionProfileHealthy
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteNutritionProfileBio(where: NutritionProfileBioWhereUniqueInput!): NutritionProfileBio
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteNutritionProfileFamous(where: NutritionProfileFamousWhereUniqueInput!): NutritionProfileFamous
  deleteUser(where: UserWhereUniqueInput!): User
  deleteNutritionProfilePrice(where: NutritionProfilePriceWhereUniqueInput!): NutritionProfilePrice
  deleteNutritionProfile(where: NutritionProfileWhereUniqueInput!): NutritionProfile
  deleteCartProduct(where: CartProductWhereUniqueInput!): CartProduct
  deleteUserProduct(where: UserProductWhereUniqueInput!): UserProduct
  deleteNutritionProfileHealthy(where: NutritionProfileHealthyWhereUniqueInput!): NutritionProfileHealthy
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  upsertNutritionProfileBio(where: NutritionProfileBioWhereUniqueInput!, create: NutritionProfileBioCreateInput!, update: NutritionProfileBioUpdateInput!): NutritionProfileBio!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertNutritionProfileFamous(where: NutritionProfileFamousWhereUniqueInput!, create: NutritionProfileFamousCreateInput!, update: NutritionProfileFamousUpdateInput!): NutritionProfileFamous!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertNutritionProfilePrice(where: NutritionProfilePriceWhereUniqueInput!, create: NutritionProfilePriceCreateInput!, update: NutritionProfilePriceUpdateInput!): NutritionProfilePrice!
  upsertNutritionProfile(where: NutritionProfileWhereUniqueInput!, create: NutritionProfileCreateInput!, update: NutritionProfileUpdateInput!): NutritionProfile!
  upsertCartProduct(where: CartProductWhereUniqueInput!, create: CartProductCreateInput!, update: CartProductUpdateInput!): CartProduct!
  upsertUserProduct(where: UserProductWhereUniqueInput!, create: UserProductCreateInput!, update: UserProductUpdateInput!): UserProduct!
  upsertNutritionProfileHealthy(where: NutritionProfileHealthyWhereUniqueInput!, create: NutritionProfileHealthyCreateInput!, update: NutritionProfileHealthyUpdateInput!): NutritionProfileHealthy!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput): BatchPayload!
  updateManyNutritionProfileBios(data: NutritionProfileBioUpdateInput!, where: NutritionProfileBioWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyNutritionProfileFamouses(data: NutritionProfileFamousUpdateInput!, where: NutritionProfileFamousWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyNutritionProfilePrices(data: NutritionProfilePriceUpdateInput!, where: NutritionProfilePriceWhereInput): BatchPayload!
  updateManyNutritionProfiles(data: NutritionProfileUpdateInput!, where: NutritionProfileWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateInput!, where: CartProductWhereInput): BatchPayload!
  updateManyUserProducts(data: UserProductUpdateInput!, where: UserProductWhereInput): BatchPayload!
  updateManyNutritionProfileHealthies(data: NutritionProfileHealthyUpdateInput!, where: NutritionProfileHealthyWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  deleteManyNutritionProfileBios(where: NutritionProfileBioWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyNutritionProfileFamouses(where: NutritionProfileFamousWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyNutritionProfilePrices(where: NutritionProfilePriceWhereInput): BatchPayload!
  deleteManyNutritionProfiles(where: NutritionProfileWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
  deleteManyUserProducts(where: UserProductWhereInput): BatchPayload!
  deleteManyNutritionProfileHealthies(where: NutritionProfileHealthyWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type NutritionProfile implements Node {
  id: ID!
  quality(where: NutritionProfilePriceWhereInput): NutritionProfilePrice!
  famous(where: NutritionProfileFamousWhereInput): NutritionProfileFamous!
  bio(where: NutritionProfileBioWhereInput): NutritionProfileBio!
  healthy(where: NutritionProfileHealthyWhereInput): NutritionProfileHealthy!
}

type NutritionProfileBio implements Node {
  id: ID!
  quantityOrBio: Boolean!
}

"""A connection to a list of items."""
type NutritionProfileBioConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NutritionProfileBioEdge]!
  aggregate: AggregateNutritionProfileBio!
}

input NutritionProfileBioCreateInput {
  quantityOrBio: Boolean!
}

input NutritionProfileBioCreateOneInput {
  create: NutritionProfileBioCreateInput
  connect: NutritionProfileBioWhereUniqueInput
}

"""An edge in a connection."""
type NutritionProfileBioEdge {
  """The item at the end of the edge."""
  node: NutritionProfileBio!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NutritionProfileBioOrderByInput {
  id_ASC
  id_DESC
  quantityOrBio_ASC
  quantityOrBio_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NutritionProfileBioPreviousValues {
  id: ID!
  quantityOrBio: Boolean!
}

type NutritionProfileBioSubscriptionPayload {
  mutation: MutationType!
  node: NutritionProfileBio
  updatedFields: [String!]
  previousValues: NutritionProfileBioPreviousValues
}

input NutritionProfileBioSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileBioSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileBioSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileBioSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NutritionProfileBioWhereInput
}

input NutritionProfileBioUpdateDataInput {
  quantityOrBio: Boolean
}

input NutritionProfileBioUpdateInput {
  quantityOrBio: Boolean
}

input NutritionProfileBioUpdateOneInput {
  create: NutritionProfileBioCreateInput
  connect: NutritionProfileBioWhereUniqueInput
  delete: Boolean
  update: NutritionProfileBioUpdateDataInput
  upsert: NutritionProfileBioUpsertNestedInput
}

input NutritionProfileBioUpsertNestedInput {
  update: NutritionProfileBioUpdateDataInput!
  create: NutritionProfileBioCreateInput!
}

input NutritionProfileBioWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileBioWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileBioWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileBioWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantityOrBio: Boolean

  """All values that are not equal to given value."""
  quantityOrBio_not: Boolean
}

input NutritionProfileBioWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type NutritionProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NutritionProfileEdge]!
  aggregate: AggregateNutritionProfile!
}

input NutritionProfileCreateInput {
  quality: NutritionProfilePriceCreateOneInput!
  famous: NutritionProfileFamousCreateOneInput!
  bio: NutritionProfileBioCreateOneInput!
  healthy: NutritionProfileHealthyCreateOneInput!
}

input NutritionProfileCreateOneInput {
  create: NutritionProfileCreateInput
  connect: NutritionProfileWhereUniqueInput
}

"""An edge in a connection."""
type NutritionProfileEdge {
  """The item at the end of the edge."""
  node: NutritionProfile!

  """A cursor for use in pagination."""
  cursor: String!
}

type NutritionProfileFamous implements Node {
  id: ID!
  quantityOrFamous: Boolean!
}

"""A connection to a list of items."""
type NutritionProfileFamousConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NutritionProfileFamousEdge]!
  aggregate: AggregateNutritionProfileFamous!
}

input NutritionProfileFamousCreateInput {
  quantityOrFamous: Boolean!
}

input NutritionProfileFamousCreateOneInput {
  create: NutritionProfileFamousCreateInput
  connect: NutritionProfileFamousWhereUniqueInput
}

"""An edge in a connection."""
type NutritionProfileFamousEdge {
  """The item at the end of the edge."""
  node: NutritionProfileFamous!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NutritionProfileFamousOrderByInput {
  id_ASC
  id_DESC
  quantityOrFamous_ASC
  quantityOrFamous_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NutritionProfileFamousPreviousValues {
  id: ID!
  quantityOrFamous: Boolean!
}

type NutritionProfileFamousSubscriptionPayload {
  mutation: MutationType!
  node: NutritionProfileFamous
  updatedFields: [String!]
  previousValues: NutritionProfileFamousPreviousValues
}

input NutritionProfileFamousSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileFamousSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileFamousSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileFamousSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NutritionProfileFamousWhereInput
}

input NutritionProfileFamousUpdateDataInput {
  quantityOrFamous: Boolean
}

input NutritionProfileFamousUpdateInput {
  quantityOrFamous: Boolean
}

input NutritionProfileFamousUpdateOneInput {
  create: NutritionProfileFamousCreateInput
  connect: NutritionProfileFamousWhereUniqueInput
  delete: Boolean
  update: NutritionProfileFamousUpdateDataInput
  upsert: NutritionProfileFamousUpsertNestedInput
}

input NutritionProfileFamousUpsertNestedInput {
  update: NutritionProfileFamousUpdateDataInput!
  create: NutritionProfileFamousCreateInput!
}

input NutritionProfileFamousWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileFamousWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileFamousWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileFamousWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantityOrFamous: Boolean

  """All values that are not equal to given value."""
  quantityOrFamous_not: Boolean
}

input NutritionProfileFamousWhereUniqueInput {
  id: ID
}

type NutritionProfileHealthy implements Node {
  id: ID!
  quantityOrHealthy: Boolean!
}

"""A connection to a list of items."""
type NutritionProfileHealthyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NutritionProfileHealthyEdge]!
  aggregate: AggregateNutritionProfileHealthy!
}

input NutritionProfileHealthyCreateInput {
  quantityOrHealthy: Boolean!
}

input NutritionProfileHealthyCreateOneInput {
  create: NutritionProfileHealthyCreateInput
  connect: NutritionProfileHealthyWhereUniqueInput
}

"""An edge in a connection."""
type NutritionProfileHealthyEdge {
  """The item at the end of the edge."""
  node: NutritionProfileHealthy!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NutritionProfileHealthyOrderByInput {
  id_ASC
  id_DESC
  quantityOrHealthy_ASC
  quantityOrHealthy_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NutritionProfileHealthyPreviousValues {
  id: ID!
  quantityOrHealthy: Boolean!
}

type NutritionProfileHealthySubscriptionPayload {
  mutation: MutationType!
  node: NutritionProfileHealthy
  updatedFields: [String!]
  previousValues: NutritionProfileHealthyPreviousValues
}

input NutritionProfileHealthySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileHealthySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileHealthySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileHealthySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NutritionProfileHealthyWhereInput
}

input NutritionProfileHealthyUpdateDataInput {
  quantityOrHealthy: Boolean
}

input NutritionProfileHealthyUpdateInput {
  quantityOrHealthy: Boolean
}

input NutritionProfileHealthyUpdateOneInput {
  create: NutritionProfileHealthyCreateInput
  connect: NutritionProfileHealthyWhereUniqueInput
  delete: Boolean
  update: NutritionProfileHealthyUpdateDataInput
  upsert: NutritionProfileHealthyUpsertNestedInput
}

input NutritionProfileHealthyUpsertNestedInput {
  update: NutritionProfileHealthyUpdateDataInput!
  create: NutritionProfileHealthyCreateInput!
}

input NutritionProfileHealthyWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileHealthyWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileHealthyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileHealthyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantityOrHealthy: Boolean

  """All values that are not equal to given value."""
  quantityOrHealthy_not: Boolean
}

input NutritionProfileHealthyWhereUniqueInput {
  id: ID
}

enum NutritionProfileOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NutritionProfilePreviousValues {
  id: ID!
}

type NutritionProfilePrice implements Node {
  id: ID!
  quantityOrQuality: Boolean!
}

"""A connection to a list of items."""
type NutritionProfilePriceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NutritionProfilePriceEdge]!
  aggregate: AggregateNutritionProfilePrice!
}

input NutritionProfilePriceCreateInput {
  quantityOrQuality: Boolean!
}

input NutritionProfilePriceCreateOneInput {
  create: NutritionProfilePriceCreateInput
  connect: NutritionProfilePriceWhereUniqueInput
}

"""An edge in a connection."""
type NutritionProfilePriceEdge {
  """The item at the end of the edge."""
  node: NutritionProfilePrice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NutritionProfilePriceOrderByInput {
  id_ASC
  id_DESC
  quantityOrQuality_ASC
  quantityOrQuality_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NutritionProfilePricePreviousValues {
  id: ID!
  quantityOrQuality: Boolean!
}

type NutritionProfilePriceSubscriptionPayload {
  mutation: MutationType!
  node: NutritionProfilePrice
  updatedFields: [String!]
  previousValues: NutritionProfilePricePreviousValues
}

input NutritionProfilePriceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfilePriceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfilePriceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfilePriceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NutritionProfilePriceWhereInput
}

input NutritionProfilePriceUpdateDataInput {
  quantityOrQuality: Boolean
}

input NutritionProfilePriceUpdateInput {
  quantityOrQuality: Boolean
}

input NutritionProfilePriceUpdateOneInput {
  create: NutritionProfilePriceCreateInput
  connect: NutritionProfilePriceWhereUniqueInput
  delete: Boolean
  update: NutritionProfilePriceUpdateDataInput
  upsert: NutritionProfilePriceUpsertNestedInput
}

input NutritionProfilePriceUpsertNestedInput {
  update: NutritionProfilePriceUpdateDataInput!
  create: NutritionProfilePriceCreateInput!
}

input NutritionProfilePriceWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfilePriceWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfilePriceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfilePriceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantityOrQuality: Boolean

  """All values that are not equal to given value."""
  quantityOrQuality_not: Boolean
}

input NutritionProfilePriceWhereUniqueInput {
  id: ID
}

type NutritionProfileSubscriptionPayload {
  mutation: MutationType!
  node: NutritionProfile
  updatedFields: [String!]
  previousValues: NutritionProfilePreviousValues
}

input NutritionProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NutritionProfileWhereInput
}

input NutritionProfileUpdateDataInput {
  quality: NutritionProfilePriceUpdateOneInput
  famous: NutritionProfileFamousUpdateOneInput
  bio: NutritionProfileBioUpdateOneInput
  healthy: NutritionProfileHealthyUpdateOneInput
}

input NutritionProfileUpdateInput {
  quality: NutritionProfilePriceUpdateOneInput
  famous: NutritionProfileFamousUpdateOneInput
  bio: NutritionProfileBioUpdateOneInput
  healthy: NutritionProfileHealthyUpdateOneInput
}

input NutritionProfileUpdateOneInput {
  create: NutritionProfileCreateInput
  connect: NutritionProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: NutritionProfileUpdateDataInput
  upsert: NutritionProfileUpsertNestedInput
}

input NutritionProfileUpsertNestedInput {
  update: NutritionProfileUpdateDataInput!
  create: NutritionProfileCreateInput!
}

input NutritionProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [NutritionProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [NutritionProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NutritionProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quality: NutritionProfilePriceWhereInput
  famous: NutritionProfileFamousWhereInput
  bio: NutritionProfileBioWhereInput
  healthy: NutritionProfileHealthyWhereInput
}

input NutritionProfileWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PriceQualityProfile {
  BEST_PRICE
  BEST_PRICE_QUALITY_RATIO
  BEST_QUALITY
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  category(where: CategoryWhereInput): Category
  qualityRate: Int
  priceQualityRatio: Float
  _uselessAllowedProducts(where: UserProductWhereInput): UserProduct
  _uselessForbiddenProducts(where: UserProductWhereInput): UserProduct
  _uselessIncludedProducts(where: CartProductWhereInput): CartProduct
  _uselessExcludedProducts(where: CartProductWhereInput): CartProduct
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryCreateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductCreateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductCreateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductCreateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductCreateOneWithoutExcludedInput
}

input ProductCreateManyWithout_uselessAllowedProductsInput {
  create: [ProductCreateWithout_uselessAllowedProductsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithout_uselessExcludedProductsInput {
  create: [ProductCreateWithout_uselessExcludedProductsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithout_uselessForbiddenProductsInput {
  create: [ProductCreateWithout_uselessForbiddenProductsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithout_uselessIncludedProductsInput {
  create: [ProductCreateWithout_uselessIncludedProductsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithout_uselessAllowedProductsInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryCreateOneWithoutProductsInput
  _uselessForbiddenProducts: UserProductCreateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductCreateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductCreateOneWithoutExcludedInput
}

input ProductCreateWithout_uselessExcludedProductsInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryCreateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductCreateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductCreateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductCreateOneWithoutIncludedInput
}

input ProductCreateWithout_uselessForbiddenProductsInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryCreateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductCreateOneWithoutAllowedInput
  _uselessIncludedProducts: CartProductCreateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductCreateOneWithoutExcludedInput
}

input ProductCreateWithout_uselessIncludedProductsInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryCreateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductCreateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductCreateOneWithoutForbiddenInput
  _uselessExcludedProducts: CartProductCreateOneWithoutExcludedInput
}

input ProductCreateWithoutCategoryInput {
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  _uselessAllowedProducts: UserProductCreateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductCreateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductCreateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductCreateOneWithoutExcludedInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  url_ASC
  url_DESC
  imageUrl_ASC
  imageUrl_DESC
  price_ASC
  price_DESC
  pricePerKilo_ASC
  pricePerKilo_DESC
  isCookedMeal_ASC
  isCookedMeal_DESC
  isMilkInside_ASC
  isMilkInside_DESC
  isMeatInside_ASC
  isMeatInside_DESC
  isEggInside_ASC
  isEggInside_DESC
  qualityRate_ASC
  qualityRate_DESC
  priceQualityRatio_ASC
  priceQualityRatio_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
  imageUrl: String!
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryUpdateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductUpdateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductUpdateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductUpdateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductUpdateOneWithoutExcludedInput
}

input ProductUpdateManyWithout_uselessAllowedProductsInput {
  create: [ProductCreateWithout_uselessAllowedProductsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithout_uselessAllowedProductsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithout_uselessAllowedProductsInput!]
}

input ProductUpdateManyWithout_uselessExcludedProductsInput {
  create: [ProductCreateWithout_uselessExcludedProductsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithout_uselessExcludedProductsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithout_uselessExcludedProductsInput!]
}

input ProductUpdateManyWithout_uselessForbiddenProductsInput {
  create: [ProductCreateWithout_uselessForbiddenProductsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithout_uselessForbiddenProductsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithout_uselessForbiddenProductsInput!]
}

input ProductUpdateManyWithout_uselessIncludedProductsInput {
  create: [ProductCreateWithout_uselessIncludedProductsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithout_uselessIncludedProductsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithout_uselessIncludedProductsInput!]
}

input ProductUpdateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCategoryInput!]
}

input ProductUpdateWithout_uselessAllowedProductsDataInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryUpdateOneWithoutProductsInput
  _uselessForbiddenProducts: UserProductUpdateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductUpdateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductUpdateOneWithoutExcludedInput
}

input ProductUpdateWithout_uselessExcludedProductsDataInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryUpdateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductUpdateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductUpdateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductUpdateOneWithoutIncludedInput
}

input ProductUpdateWithout_uselessForbiddenProductsDataInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryUpdateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductUpdateOneWithoutAllowedInput
  _uselessIncludedProducts: CartProductUpdateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductUpdateOneWithoutExcludedInput
}

input ProductUpdateWithout_uselessIncludedProductsDataInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  category: CategoryUpdateOneWithoutProductsInput
  _uselessAllowedProducts: UserProductUpdateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductUpdateOneWithoutForbiddenInput
  _uselessExcludedProducts: CartProductUpdateOneWithoutExcludedInput
}

input ProductUpdateWithoutCategoryDataInput {
  title: String
  url: String
  imageUrl: String
  price: Float
  pricePerKilo: Float
  isCookedMeal: Boolean
  isMilkInside: Boolean
  isMeatInside: Boolean
  isEggInside: Boolean
  qualityRate: Int
  priceQualityRatio: Float
  _uselessAllowedProducts: UserProductUpdateOneWithoutAllowedInput
  _uselessForbiddenProducts: UserProductUpdateOneWithoutForbiddenInput
  _uselessIncludedProducts: CartProductUpdateOneWithoutIncludedInput
  _uselessExcludedProducts: CartProductUpdateOneWithoutExcludedInput
}

input ProductUpdateWithWhereUniqueWithout_uselessAllowedProductsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithout_uselessAllowedProductsDataInput!
}

input ProductUpdateWithWhereUniqueWithout_uselessExcludedProductsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithout_uselessExcludedProductsDataInput!
}

input ProductUpdateWithWhereUniqueWithout_uselessForbiddenProductsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithout_uselessForbiddenProductsDataInput!
}

input ProductUpdateWithWhereUniqueWithout_uselessIncludedProductsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithout_uselessIncludedProductsDataInput!
}

input ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCategoryDataInput!
}

input ProductUpsertWithWhereUniqueWithout_uselessAllowedProductsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithout_uselessAllowedProductsDataInput!
  create: ProductCreateWithout_uselessAllowedProductsInput!
}

input ProductUpsertWithWhereUniqueWithout_uselessExcludedProductsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithout_uselessExcludedProductsDataInput!
  create: ProductCreateWithout_uselessExcludedProductsInput!
}

input ProductUpsertWithWhereUniqueWithout_uselessForbiddenProductsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithout_uselessForbiddenProductsDataInput!
  create: ProductCreateWithout_uselessForbiddenProductsInput!
}

input ProductUpsertWithWhereUniqueWithout_uselessIncludedProductsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithout_uselessIncludedProductsDataInput!
  create: ProductCreateWithout_uselessIncludedProductsInput!
}

input ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCategoryDataInput!
  create: ProductCreateWithoutCategoryInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  pricePerKilo: Float

  """All values that are not equal to given value."""
  pricePerKilo_not: Float

  """All values that are contained in given list."""
  pricePerKilo_in: [Float!]

  """All values that are not contained in given list."""
  pricePerKilo_not_in: [Float!]

  """All values less than the given value."""
  pricePerKilo_lt: Float

  """All values less than or equal the given value."""
  pricePerKilo_lte: Float

  """All values greater than the given value."""
  pricePerKilo_gt: Float

  """All values greater than or equal the given value."""
  pricePerKilo_gte: Float
  isCookedMeal: Boolean

  """All values that are not equal to given value."""
  isCookedMeal_not: Boolean
  isMilkInside: Boolean

  """All values that are not equal to given value."""
  isMilkInside_not: Boolean
  isMeatInside: Boolean

  """All values that are not equal to given value."""
  isMeatInside_not: Boolean
  isEggInside: Boolean

  """All values that are not equal to given value."""
  isEggInside_not: Boolean
  qualityRate: Int

  """All values that are not equal to given value."""
  qualityRate_not: Int

  """All values that are contained in given list."""
  qualityRate_in: [Int!]

  """All values that are not contained in given list."""
  qualityRate_not_in: [Int!]

  """All values less than the given value."""
  qualityRate_lt: Int

  """All values less than or equal the given value."""
  qualityRate_lte: Int

  """All values greater than the given value."""
  qualityRate_gt: Int

  """All values greater than or equal the given value."""
  qualityRate_gte: Int
  priceQualityRatio: Float

  """All values that are not equal to given value."""
  priceQualityRatio_not: Float

  """All values that are contained in given list."""
  priceQualityRatio_in: [Float!]

  """All values that are not contained in given list."""
  priceQualityRatio_not_in: [Float!]

  """All values less than the given value."""
  priceQualityRatio_lt: Float

  """All values less than or equal the given value."""
  priceQualityRatio_lte: Float

  """All values greater than the given value."""
  priceQualityRatio_gt: Float

  """All values greater than or equal the given value."""
  priceQualityRatio_gte: Float
  category: CategoryWhereInput
  _uselessAllowedProducts: UserProductWhereInput
  _uselessForbiddenProducts: UserProductWhereInput
  _uselessIncludedProducts: CartProductWhereInput
  _uselessExcludedProducts: CartProductWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  nutritionProfileBios(where: NutritionProfileBioWhereInput, orderBy: NutritionProfileBioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NutritionProfileBio]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  nutritionProfileFamouses(where: NutritionProfileFamousWhereInput, orderBy: NutritionProfileFamousOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NutritionProfileFamous]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  nutritionProfilePrices(where: NutritionProfilePriceWhereInput, orderBy: NutritionProfilePriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NutritionProfilePrice]!
  nutritionProfiles(where: NutritionProfileWhereInput, orderBy: NutritionProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NutritionProfile]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  userProducts(where: UserProductWhereInput, orderBy: UserProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserProduct]!
  nutritionProfileHealthies(where: NutritionProfileHealthyWhereInput, orderBy: NutritionProfileHealthyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NutritionProfileHealthy]!
  product(where: ProductWhereUniqueInput!): Product
  cart(where: CartWhereUniqueInput!): Cart
  nutritionProfileBio(where: NutritionProfileBioWhereUniqueInput!): NutritionProfileBio
  category(where: CategoryWhereUniqueInput!): Category
  nutritionProfileFamous(where: NutritionProfileFamousWhereUniqueInput!): NutritionProfileFamous
  user(where: UserWhereUniqueInput!): User
  nutritionProfilePrice(where: NutritionProfilePriceWhereUniqueInput!): NutritionProfilePrice
  nutritionProfile(where: NutritionProfileWhereUniqueInput!): NutritionProfile
  cartProduct(where: CartProductWhereUniqueInput!): CartProduct
  userProduct(where: UserProductWhereUniqueInput!): UserProduct
  nutritionProfileHealthy(where: NutritionProfileHealthyWhereUniqueInput!): NutritionProfileHealthy
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  nutritionProfileBiosConnection(where: NutritionProfileBioWhereInput, orderBy: NutritionProfileBioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NutritionProfileBioConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  nutritionProfileFamousesConnection(where: NutritionProfileFamousWhereInput, orderBy: NutritionProfileFamousOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NutritionProfileFamousConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  nutritionProfilePricesConnection(where: NutritionProfilePriceWhereInput, orderBy: NutritionProfilePriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NutritionProfilePriceConnection!
  nutritionProfilesConnection(where: NutritionProfileWhereInput, orderBy: NutritionProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NutritionProfileConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!
  userProductsConnection(where: UserProductWhereInput, orderBy: UserProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserProductConnection!
  nutritionProfileHealthiesConnection(where: NutritionProfileHealthyWhereInput, orderBy: NutritionProfileHealthyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NutritionProfileHealthyConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  nutritionProfileBio(where: NutritionProfileBioSubscriptionWhereInput): NutritionProfileBioSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  nutritionProfileFamous(where: NutritionProfileFamousSubscriptionWhereInput): NutritionProfileFamousSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  nutritionProfilePrice(where: NutritionProfilePriceSubscriptionWhereInput): NutritionProfilePriceSubscriptionPayload
  nutritionProfile(where: NutritionProfileSubscriptionWhereInput): NutritionProfileSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
  userProduct(where: UserProductSubscriptionWhereInput): UserProductSubscriptionPayload
  nutritionProfileHealthy(where: NutritionProfileHealthySubscriptionWhereInput): NutritionProfileHealthySubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  gender: Gender!
  weeklyBudget: Int!
  age: Int
  isCooking: Boolean
  isLactoseIntolerant: Boolean
  isVegetarien: Boolean
  isVegetalien: Boolean
  falseAllowedProductIds: [ID!]!
  falseForbiddenProductIds: [ID!]!
  products(where: UserProductWhereInput): UserProduct
  priceQualityProfile: PriceQualityProfile
  nutritionProfile(where: NutritionProfileWhereInput): NutritionProfile
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreatefalseAllowedProductIdsInput {
  set: [ID!]
}

input UserCreatefalseForbiddenProductIdsInput {
  set: [ID!]
}

input UserCreateInput {
  email: String!
  password: String!
  gender: Gender!
  weeklyBudget: Int!
  age: Int
  isCooking: Boolean
  isLactoseIntolerant: Boolean
  isVegetarien: Boolean
  isVegetalien: Boolean
  priceQualityProfile: PriceQualityProfile
  falseAllowedProductIds: UserCreatefalseAllowedProductIdsInput
  falseForbiddenProductIds: UserCreatefalseForbiddenProductIdsInput
  products: UserProductCreateOneInput
  nutritionProfile: NutritionProfileCreateOneInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  gender_ASC
  gender_DESC
  weeklyBudget_ASC
  weeklyBudget_DESC
  age_ASC
  age_DESC
  isCooking_ASC
  isCooking_DESC
  isLactoseIntolerant_ASC
  isLactoseIntolerant_DESC
  isVegetarien_ASC
  isVegetarien_DESC
  isVegetalien_ASC
  isVegetalien_DESC
  priceQualityProfile_ASC
  priceQualityProfile_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  gender: Gender!
  weeklyBudget: Int!
  age: Int
  isCooking: Boolean
  isLactoseIntolerant: Boolean
  isVegetarien: Boolean
  isVegetalien: Boolean
  falseAllowedProductIds: [ID!]!
  falseForbiddenProductIds: [ID!]!
  priceQualityProfile: PriceQualityProfile
}

type UserProduct implements Node {
  id: ID!
  allowed(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  forbidden(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type UserProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserProductEdge]!
  aggregate: AggregateUserProduct!
}

input UserProductCreateInput {
  allowed: ProductCreateManyWithout_uselessAllowedProductsInput
  forbidden: ProductCreateManyWithout_uselessForbiddenProductsInput
}

input UserProductCreateOneInput {
  create: UserProductCreateInput
  connect: UserProductWhereUniqueInput
}

input UserProductCreateOneWithoutAllowedInput {
  create: UserProductCreateWithoutAllowedInput
  connect: UserProductWhereUniqueInput
}

input UserProductCreateOneWithoutForbiddenInput {
  create: UserProductCreateWithoutForbiddenInput
  connect: UserProductWhereUniqueInput
}

input UserProductCreateWithoutAllowedInput {
  forbidden: ProductCreateManyWithout_uselessForbiddenProductsInput
}

input UserProductCreateWithoutForbiddenInput {
  allowed: ProductCreateManyWithout_uselessAllowedProductsInput
}

"""An edge in a connection."""
type UserProductEdge {
  """The item at the end of the edge."""
  node: UserProduct!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserProductOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserProductPreviousValues {
  id: ID!
}

type UserProductSubscriptionPayload {
  mutation: MutationType!
  node: UserProduct
  updatedFields: [String!]
  previousValues: UserProductPreviousValues
}

input UserProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserProductWhereInput
}

input UserProductUpdateDataInput {
  allowed: ProductUpdateManyWithout_uselessAllowedProductsInput
  forbidden: ProductUpdateManyWithout_uselessForbiddenProductsInput
}

input UserProductUpdateInput {
  allowed: ProductUpdateManyWithout_uselessAllowedProductsInput
  forbidden: ProductUpdateManyWithout_uselessForbiddenProductsInput
}

input UserProductUpdateOneInput {
  create: UserProductCreateInput
  connect: UserProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserProductUpdateDataInput
  upsert: UserProductUpsertNestedInput
}

input UserProductUpdateOneWithoutAllowedInput {
  create: UserProductCreateWithoutAllowedInput
  connect: UserProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserProductUpdateWithoutAllowedDataInput
  upsert: UserProductUpsertWithoutAllowedInput
}

input UserProductUpdateOneWithoutForbiddenInput {
  create: UserProductCreateWithoutForbiddenInput
  connect: UserProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserProductUpdateWithoutForbiddenDataInput
  upsert: UserProductUpsertWithoutForbiddenInput
}

input UserProductUpdateWithoutAllowedDataInput {
  forbidden: ProductUpdateManyWithout_uselessForbiddenProductsInput
}

input UserProductUpdateWithoutForbiddenDataInput {
  allowed: ProductUpdateManyWithout_uselessAllowedProductsInput
}

input UserProductUpsertNestedInput {
  update: UserProductUpdateDataInput!
  create: UserProductCreateInput!
}

input UserProductUpsertWithoutAllowedInput {
  update: UserProductUpdateWithoutAllowedDataInput!
  create: UserProductCreateWithoutAllowedInput!
}

input UserProductUpsertWithoutForbiddenInput {
  update: UserProductUpdateWithoutForbiddenDataInput!
  create: UserProductCreateWithoutForbiddenInput!
}

input UserProductWhereInput {
  """Logical AND on all given filters."""
  AND: [UserProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  allowed_every: ProductWhereInput
  allowed_some: ProductWhereInput
  allowed_none: ProductWhereInput
  forbidden_every: ProductWhereInput
  forbidden_some: ProductWhereInput
  forbidden_none: ProductWhereInput
}

input UserProductWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  gender: Gender
  weeklyBudget: Int
  age: Int
  isCooking: Boolean
  isLactoseIntolerant: Boolean
  isVegetarien: Boolean
  isVegetalien: Boolean
  priceQualityProfile: PriceQualityProfile
  falseAllowedProductIds: UserUpdatefalseAllowedProductIdsInput
  falseForbiddenProductIds: UserUpdatefalseForbiddenProductIdsInput
  products: UserProductUpdateOneInput
  nutritionProfile: NutritionProfileUpdateOneInput
}

input UserUpdatefalseAllowedProductIdsInput {
  set: [ID!]
}

input UserUpdatefalseForbiddenProductIdsInput {
  set: [ID!]
}

input UserUpdateInput {
  email: String
  password: String
  gender: Gender
  weeklyBudget: Int
  age: Int
  isCooking: Boolean
  isLactoseIntolerant: Boolean
  isVegetarien: Boolean
  isVegetalien: Boolean
  priceQualityProfile: PriceQualityProfile
  falseAllowedProductIds: UserUpdatefalseAllowedProductIdsInput
  falseForbiddenProductIds: UserUpdatefalseForbiddenProductIdsInput
  products: UserProductUpdateOneInput
  nutritionProfile: NutritionProfileUpdateOneInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  gender: Gender

  """All values that are not equal to given value."""
  gender_not: Gender

  """All values that are contained in given list."""
  gender_in: [Gender!]

  """All values that are not contained in given list."""
  gender_not_in: [Gender!]
  weeklyBudget: Int

  """All values that are not equal to given value."""
  weeklyBudget_not: Int

  """All values that are contained in given list."""
  weeklyBudget_in: [Int!]

  """All values that are not contained in given list."""
  weeklyBudget_not_in: [Int!]

  """All values less than the given value."""
  weeklyBudget_lt: Int

  """All values less than or equal the given value."""
  weeklyBudget_lte: Int

  """All values greater than the given value."""
  weeklyBudget_gt: Int

  """All values greater than or equal the given value."""
  weeklyBudget_gte: Int
  age: Int

  """All values that are not equal to given value."""
  age_not: Int

  """All values that are contained in given list."""
  age_in: [Int!]

  """All values that are not contained in given list."""
  age_not_in: [Int!]

  """All values less than the given value."""
  age_lt: Int

  """All values less than or equal the given value."""
  age_lte: Int

  """All values greater than the given value."""
  age_gt: Int

  """All values greater than or equal the given value."""
  age_gte: Int
  isCooking: Boolean

  """All values that are not equal to given value."""
  isCooking_not: Boolean
  isLactoseIntolerant: Boolean

  """All values that are not equal to given value."""
  isLactoseIntolerant_not: Boolean
  isVegetarien: Boolean

  """All values that are not equal to given value."""
  isVegetarien_not: Boolean
  isVegetalien: Boolean

  """All values that are not equal to given value."""
  isVegetalien_not: Boolean
  priceQualityProfile: PriceQualityProfile

  """All values that are not equal to given value."""
  priceQualityProfile_not: PriceQualityProfile

  """All values that are contained in given list."""
  priceQualityProfile_in: [PriceQualityProfile!]

  """All values that are not contained in given list."""
  priceQualityProfile_not_in: [PriceQualityProfile!]
  products: UserProductWhereInput
  nutritionProfile: NutritionProfileWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }
