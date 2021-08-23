class PSet extends Set {
  union(...sets) {
    return PSet.union(this, ...sets)
  }
  intersection(...sets) {
    return PSet.intersection(...sets);
  }
  difference(a, b) {
    return PSet.difference(a, b);
  }
  symmetricDifference(a, b) {
    return PSet.symmetricDifference(a, b)
  }
  cartesianProduct(a, b) {
    return PSet.cartesianProduct(a, b);
  }
  powerSet(a) {
    return PSet.powerSet(a);
  }
  static union(a, ...bSets) {
    const unionSet = new PSet(a);
    for (const b of bSets) {
      for (const bValue of b) {
        unionSet.add(bValue);
      }
    }
    return unionSet;
  }
  static intersection(a, ...bSets) {
    const intersectionSet = new PSet(a);
    for (const aValue of intersectionSet) {
      for (const b of bSets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue);
        }
      }
    }
    return intersectionSet;
  }
  static difference(a, b) {
    const differenceSet = new PSet(a);
    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue);
      }
    }
    return differenceSet;
  }
  static symmetricDifference(a, b) {
    const symmetric = new PSet();
    const i = symmetric.intersection(a, b);
    return symmetric.union(symmetric.difference(a, i), symmetric.difference(b, i))
  }
  static cartesianProduct(a, b) {
    const cartesianProductSet = new PSet();
    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue]);
      }
    }
    return cartesianProductSet;
  }
  static powerSet(a) {
    const powerSet = new PSet().add(new PSet());
    for (const aValue of a) {
      for (const set of new PSet(powerSet)) {
        powerSet.add(new PSet(set).add(aValue));
      }
    }
    return powerSet;
  }
}
export default PSet;
